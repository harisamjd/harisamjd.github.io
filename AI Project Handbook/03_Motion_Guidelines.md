# Motion Guidelines

## Portfolio Website — Haris A. Majid

**Version:** 1.0

---

# 1. Motion Philosophy

Motion exists to support storytelling.

Motion should never exist purely for decoration.

The purpose of motion is to:

* Guide attention
* Explain relationships
* Create hierarchy
* Improve immersion
* Support narrative flow

Users should remember the story.

Not the animation.

---

# 2. Design Inspiration

Inspired By

* Apple
* Linear
* Stripe
* Raycast
* Vercel

Characteristics

* Smooth
* Purposeful
* Calm
* Elegant
* Controlled

Avoid

* Excessive motion
* Flashy transitions
* Fast spinning objects
* Unnecessary bounce effects
* Constant movement

---

# 3. Motion Principles

## Principle 1

Motion Must Have Purpose

Every animation should answer:

Why is this moving?

If there is no reason, remove it.

---

## Principle 2

Content First

Content should always remain readable.

Motion should support content.

Never compete with it.

---

## Principle 3

Motion Creates Focus

Use animation to direct the user's eyes.

Not to impress them.

---

## Principle 4

Consistency

The same motion behavior should feel familiar throughout the website.

---

## Principle 5

Performance First

A smooth 60 FPS experience is more important than a complex animation.

---

# 4. Motion Timing

Fast

150ms

Use for:

* Buttons
* Hover states
* Navigation interactions

---

Normal

300ms

Use for:

* Cards
* Text reveals
* Small transitions

---

Medium

600ms

Use for:

* Section reveals
* Hero transitions

---

Long

1000ms

Use for:

* Storytelling moments
* Major scene transitions

---

# 5. Easing

Primary

ease-out

Use most of the time.

---

Secondary

ease-in-out

Use for section transitions.

---

Avoid

Elastic

Bounce

Rubber-band effects

---

# 6. Scroll Experience

Scrolling should feel smooth and premium.

Use:

Lenis

Goals:

* Consistent smooth scrolling
* Better storytelling flow
* More controlled section transitions

---

Recommended Settings

Duration

1.2

Smooth Wheel

Enabled

Smooth Touch

Enabled

---

# 7. Hero Section Motion

Objective

Create curiosity.

Not overwhelm.

---

Sequence

Page Load

↓

Hero Fade In

↓

Headline Reveal

↓

Subtitle Reveal

↓

CTA Reveal

↓

Scroll Indicator Appears

---

Headline

Animation

Opacity

0 → 100

TranslateY

40px → 0

Duration

1000ms

---

Subtitle

Starts after headline.

Slight delay.

---

CTA

Appears last.

Encourages exploration.

---

# 8. Navigation Motion

Initial State

Transparent

---

After Scroll

Background Appears

Small Blur

Subtle Shadow

---

Navigation Links

Hover

Opacity Change

Color Transition

150ms

---

Current Section

Highlighted

Smooth Transition

---

# 9. Section Entry Animation

Every major section follows the same pattern.

Initial

Opacity 0

TranslateY 40px

---

Visible

Opacity 100

TranslateY 0

---

Duration

600ms

---

# 10. About Section Motion

Photo

Fade In

Scale 0.95 → 1

---

Text

Reveal Sequentially

Headline

↓

Description

↓

Additional Details

---

No dramatic effects.

---

# 11. Career Timeline Motion

Desktop

Timeline grows while scrolling.

---

Milestones

Appear one by one.

---

Animation

Opacity

0 → 100

Scale

0.95 → 1

TranslateY

20px → 0

---

Timeline Progress

Connected line fills as user scrolls.

---

# 12. Expertise Cards Motion

Default

Calm

Minimal

---

Hover

Slight Elevation

Slight Scale

1.00 → 1.02

---

Content

Subtle Fade In

---

Avoid dramatic zooming.

---

# 13. Business Impact Motion

Numbers are the focus.

---

KPI Cards

Fade In

Scale In

---

Counters

Count Up

Once only

---

Example

0

↓

54

%

---

Counter Speed

1200ms

Maximum

1500ms

---

# 14. Project Section Motion

Most important section.

Should feel immersive.

---

Project Introduction

Pinned briefly while scrolling.

---

Story Flow

Business Problem

↓

Challenge

↓

Role

↓

Solution

↓

Impact

---

Each block fades into the next.

---

Image Motion

Parallax

Very subtle

---

Scale

1.05 → 1.00

---

Avoid excessive movement.

---

# 15. Certificate Section Motion

Cards appear in sequence.

---

Hover

Lift

4px

---

Shadow Increase

Subtle

---

Optional

Preview Modal

Fade In

Scale In

---

# 16. Contact Section Motion

Keep minimal.

---

Reveal

Fade In

---

Links

Underline Animation

Hover

---

Avoid unnecessary effects.

---

# 17. Footer Motion

Minimal.

Almost static.

---

Purpose

Provide closure.

---

# 18. Scroll Progress Indicator

Optional Feature

Desktop Only

---

Position

Left Side

Or

Top Edge

---

Behavior

Shows reading progress.

Updates smoothly.

---

# 19. Background Motion

Allowed

Very subtle animated gradients.

Very subtle noise.

Very subtle floating elements.

---

Not Allowed

Constant movement.

Distracting particles.

Heavy visual effects.

---

# 20. Section Transition Strategy

Users should feel continuity.

Not page changes.

---

Transition Pattern

Section A

Fade Out Slightly

↓

Section B

Fade In

↓

Content Revealed

---

The transition should feel invisible.

---

# 21. Reduced Motion Support

Respect:

prefers-reduced-motion

---

Disable

Parallax

Pinned sections

Heavy transitions

---

Keep

Simple fades

Content reveals

---

Accessibility always has higher priority than motion.

---

# 22. Mobile Motion Strategy

Mobile devices should receive simplified animations.

---

Reduce

Parallax intensity

Pinned sections

Complex scroll interactions

---

Keep

Fade

Reveal

Opacity

Small Scale

---

Performance takes priority.

---

# 23. Performance Guidelines

Target

60 FPS

---

Avoid

Layout thrashing

Large repaint areas

Heavy blur effects

Continuous animations

---

Prefer

Transform

Opacity

GPU-accelerated properties

---

# 24. Motion Hierarchy

Level 1

Micro Interactions

Buttons

Links

Cards

150ms

---

Level 2

Component Motion

Cards

Timeline

Counters

300–600ms

---

Level 3

Storytelling Motion

Hero

Projects

Section Transitions

600–1000ms

---

Level 4

Immersive Moments

Major project showcases

Rarely used

Maximum impact

---

# 25. Motion Success Criteria

Motion is successful when:

Users understand the content better.

Users never feel distracted.

Animations remain smooth.

Scrolling feels natural.

Performance remains excellent.

The experience feels premium.

If users notice the animation more than the content, the motion system has failed.

The goal is not to create movement.

The goal is to create understanding.
