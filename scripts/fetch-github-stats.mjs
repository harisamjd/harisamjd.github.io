import fs from 'node:fs';
import path from 'node:path';

const OUTPUT_PATH = path.join(process.cwd(), 'src/content/data/github-stats.json');
const token = process.env.GH_STATS_TOKEN;

if (!token) {
  console.log('[fetch-github-stats] GH_STATS_TOKEN is not set. Keeping existing github-stats.json.');
  process.exit(0);
}

const query = `
  query {
    viewer {
      login
      url
      publicRepos: repositories(privacy: PUBLIC, ownerAffiliations: OWNER) {
        totalCount
      }
      privateRepos: repositories(privacy: PRIVATE, ownerAffiliations: OWNER) {
        totalCount
      }
      contributionsCollection {
        totalCommitContributions
        restrictedContributionsCount
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

try {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'harisamjd-portfolio-build'
    },
    body: JSON.stringify({ query })
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL HTTP ${response.status}: ${await response.text()}`);
  }

  const payload = await response.json();
  if (payload.errors?.length) {
    throw new Error(`GitHub GraphQL errors: ${JSON.stringify(payload.errors)}`);
  }

  const viewer = payload.data?.viewer;
  if (!viewer) {
    throw new Error('Missing viewer in GitHub GraphQL response.');
  }

  const calendar = viewer.contributionsCollection.contributionCalendar;
  const allDays = calendar.weeks.flatMap((w) => w.contributionDays);

  let activeDays = 0;
  let longestStreak = 0;
  let runningStreak = 0;

  for (const day of allDays) {
    if (day.contributionCount > 0) {
      activeDays++;
      runningStreak++;
      if (runningStreak > longestStreak) {
        longestStreak = runningStreak;
      }
    } else {
      runningStreak = 0;
    }
  }

  // Current streak: count backwards from today (allow today to be 0 if not yet committed today)
  let currentStreak = 0;
  for (let i = allDays.length - 1; i >= 0; i--) {
    const count = allDays[i].contributionCount;
    if (count > 0) {
      currentStreak++;
    } else if (i === allDays.length - 1) {
      continue;
    } else {
      break;
    }
  }

  const stats = {
    username: viewer.login,
    profileUrl: viewer.url,
    updatedAt: new Date().toISOString(),
    totalContributions: calendar.totalContributions,
    publicContributions:
      calendar.totalContributions - viewer.contributionsCollection.restrictedContributionsCount,
    privateContributions: viewer.contributionsCollection.restrictedContributionsCount,
    publicRepos: viewer.publicRepos.totalCount,
    privateRepos: viewer.privateRepos.totalCount,
    activeDays,
    currentStreak,
    longestStreak,
    weeks: calendar.weeks
  };

  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(stats, null, 2)}\n`, 'utf8');
  console.log(
    `[fetch-github-stats] Updated stats for @${stats.username}: ${stats.totalContributions} contributions (${stats.privateContributions} private).`
  );
} catch (error) {
  console.error('[fetch-github-stats] Failed to fetch GitHub stats:', error);
  console.log('[fetch-github-stats] Falling back to existing github-stats.json.');
  process.exit(0);
}
