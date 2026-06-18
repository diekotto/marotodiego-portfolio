## Overview

The marotodiego.com portfolio is styled as a **modern terminal emulator**. The metaphor is deliberate: the site belongs to a Cloud & DevOps architect, and a terminal is where that work actually happens — so the interface presents the résumé as a shell session rather than a brochure. Every section is the output of a command (`$ cat about.md`, `$ ls projects/`, `$ cat experience.log`), the hero is a live login session that types `whoami` and `cat role.txt`, and a blinking block cursor sits at the bottom of the prompt.

The aesthetic is restrained, not nostalgic: a single phosphor-green accent (`{colors.primary}`) against a calm slate background, monospaced type throughout (JetBrains Mono), hairline borders, flat surfaces, and square corners. It reads as a contemporary terminal (iTerm / Ghostty / the GitHub dark palette), not a CRT throwback — there is no scanline, glow, or all-caps shouting. The design ships in two skins driven by a single token set: a **dark terminal** (default) and a **light "paper terminal"**, toggled in the navbar.

**Key Characteristics:**

- Monospaced everywhere — JetBrains Mono is the only typeface; there is no serif/sans pairing. The mono grid _is_ the brand.
- One accent color only: phosphor green (`{colors.primary}`). It marks prompts, links, keys/titles, and the focus ring. Everything else is foreground ink or muted gray.
- Shell-prompt section headers: each `<h2>` is a `diek@portfolio:~$ <command>` line instead of a styled title. Descriptions are written as `# comments`.
- Flat surfaces, hairline borders: cards are terminal "panes" — a 1 px `{colors.border}` outline over a slightly raised surface in dark mode. No drop shadows, no gradients, no soft elevation.
- Square corners universally (`{rounded.none}`). The only animated element is the blinking cursor.
- Continuous canvas: sections are one uninterrupted terminal screen separated by thin horizontal rules, never alternating background fills.

## Colors

The palette is a single token set with light (`:root`) and dark (`.dark`) values, stored as HSL triplets consumed via `hsl(var(--token))`. Dark is the default and the canonical skin.

### Brand & Accent

- **Phosphor Green** (`{colors.primary}` — dark `#3fbb56` / light `#1a7f37`): The sole accent. Used for the shell prompt user@host, hyperlinks and link hover, card titles and keys (the `>` / `#` prefixes), badges/chips, the blinking cursor, and the focus ring. The light skin darkens it to keep AA contrast on the off-white background. Never used as a large fill — it is an ink accent, not a background.
- `{colors.primary-foreground}` — dark `#0d1117` / light `#ffffff`: text/icon color when something does sit on a solid green fill (rare).

### Surface

- **Background** (`{colors.background}` — dark `#0d1117` / light `#f5f7fa`): The terminal canvas. The whole page shares it; sections are divided by rules, not by background changes.
- **Card / Pane** (`{colors.card}` — dark `#161b22` / light `#ffffff`): Terminal panes sit one step off the canvas — slightly lifted in dark mode, pure white in light mode — and are defined by their border.
- **Muted** (`{colors.muted}` — dark `#181d25` / light `#e8edf3`): Secondary chip/surface fill (skill badges, inputs).
- **Border** (`{colors.border}` — dark `#2f353d` / light `#cfd8e0`): The hairline that defines every pane, section divider, and input. Applied globally via `* { @apply border-border }`.

### Text

- **Foreground** (`{colors.foreground}` — dark `#c6cdd6` / light `#1f242a`): Primary body and heading ink — a soft off-white in dark mode (never pure white, to ease eye strain like a real terminal), near-black in light mode.
- **Muted Foreground** (`{colors.muted-foreground}` — dark `#8b939e` / light `#61696f`): Comments, captions, prompt punctuation (`:` `~` `$`), inactive nav links, and de-emphasized body copy.

### Closed Palette

The palette is intentionally closed: **green + foreground ink + muted gray + border**, over the canvas. There are no per-section tints, no secondary brand hues, no decorative colors. `{colors.destructive}` exists in the token set for error states but is not used in the portfolio surfaces.

## Typography

### Font Family

- **JetBrains Mono** (fallback: `ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace`) — the single typeface for the entire site, loaded via `next/font/google` in `app/layout.tsx`. Headings, body, prompts, code, labels, and buttons are all monospaced. The uniform character grid is the core of the terminal feel; there is no second family.

### Hierarchy

Sizes are driven with Tailwind's type scale rather than fixed tokens. The working hierarchy:

| Role            | Size (Tailwind)         | Weight | Use                                                |
| --------------- | ----------------------- | ------ | -------------------------------------------------- |
| Hero name       | `text-2xl` → `text-4xl` | 700    | `whoami` output — "Diego Maroto"                   |
| Hero role       | `text-lg` → `text-2xl`  | 700    | `cat role.txt` output, in `{colors.primary}` green |
| Section command | `text-sm` → `text-base` | 400    | The `diek@portfolio:~$ <command>` prompt header    |
| Card title      | `text-base` / `text-lg` | 600    | Pane titles, green, prefixed with `>` or `#`       |
| Body            | `text-base`             | 400    | Paragraph copy in `{colors.foreground}`            |
| Comment / sub   | `text-sm` / `text-base` | 400    | `# …` descriptions in `{colors.muted-foreground}`  |
| Caption         | `text-xs` / `text-sm`   | 400    | Footer copyright, "last login" line, badges        |

### Principles

- **Mono for everything.** No serif body, no display sans. The single monospaced family carries the whole register.
- **Restrained weight.** Bold (700) is reserved for the hero name/role and prompt brand; almost everything else is regular (400) or medium (500–600). There is no Black/900 display weight.
- **No all-caps shouting and no letter-spacing tricks.** Titles read as lowercase commands and file names (`cat about.md`, `ls projects/`); the only casing convention is the prompt itself.
- **Syntactic prefixes carry hierarchy.** Card titles use a green `>` (list item) or `#` (heading/comment) prefix via `before:content`, and descriptions open with `#`, mirroring shell/markdown grammar instead of size jumps.

## Layout

### Spacing System

- Tailwind's default 4 px-based scale. Common rhythm: `py-16` section padding, `mb-10` under each command header (`mb-4` when a `#` comment follows), `gap-6`/`gap-8` between cards, `p-6` card interior.
- The hero uses `space-y-4` between prompt blocks to mimic successive command outputs scrolling in a shell.

### Grid & Container

- Centered `container` (max-width 1400px at `2xl`, `2rem` padding) — the same container on every section.
- Content grids: skills `lg:grid-cols-3`, certifications `lg:grid-cols-4`, projects/community `md:grid-cols-2`, about/awards/contact use 2–3 column grids; experience and education stack full-width / centered.
- The hero and text blocks are constrained to `max-w-3xl` / `max-w-2xl` so prompt lines read like terminal output, not full-bleed paragraphs.

### Whitespace Philosophy

Calmer than a real dense terminal but still efficient. Sections breathe vertically (`py-16`) while content stays left-aligned and grid-tight, reinforcing the "reading a log" feel. The continuous shared background with hairline dividers makes the whole page scan as one long terminal buffer.

### Responsive Strategy

| Name    | Width    | Key Changes                                                                           |
| ------- | -------- | ------------------------------------------------------------------------------------- |
| Mobile  | < 768 px | Nav collapses to a hamburger (`md:hidden`); all content grids drop to a single column |
| Desktop | ≥ 768 px | Inline nav links appear (`hidden md:flex`); multi-column content grids engage         |

**The navbar switch is CSS-only**, not JavaScript breakpoint detection — desktop links are `hidden md:flex` and the hamburger is `md:hidden`. This avoids the hydration flash/overflow that a JS `useMobile()` hook caused (the full desktop link row rendering on mobile before hydration and breaking the viewport width). The mobile menu is a normal stacked block under the bar, not an absolutely positioned overlay.

#### Touch Targets

Interactive controls (nav links, social links, buttons, theme toggle) use icon-button sizing (`h-10 w-10`) or generous padding to clear the 44 px touch-target guideline on mobile.

#### Image Behavior

The only photographic asset is the penguin logo in the hero, rendered at 64 px with a 1 px `{colors.border}` frame (a "framed pane", consistent with cards). Project/community logos sit in a bordered top region of their card with a `border-b border-border` divider, never cropped with radius.

## Elevation & Depth

| Level        | Treatment                               | Use                                                          |
| ------------ | --------------------------------------- | ------------------------------------------------------------ |
| 0 — Flush    | No border, shares canvas                | Body text, section backgrounds, footer band                  |
| 1 — Hairline | `1px solid {colors.border}`             | Cards/panes, section dividers, inputs, framed logo, navbar   |
| 2 — Raised   | `{colors.card}` one step off the canvas | Card surface in dark mode (subtle lift via fill, not shadow) |

There are **no soft shadows and no blurred elevation** anywhere. Depth is expressed only by the 1 px border and, in dark mode, the slightly lighter card fill. (An earlier brutalist iteration used hard offset shadows; the terminal direction dropped them in favor of flat panes.)

## Shapes

### Border Radius Scale

| Token            | Value | Use                                                           |
| ---------------- | ----- | ------------------------------------------------------------- |
| `{rounded.none}` | 0px   | Universal — cards, buttons, inputs, badges, panes, the navbar |

`--radius` is set to `0rem`, so every shadcn primitive that derives from it renders square. There is no rounded tier. The only non-rectangular motif is the blinking block cursor glyph (`▋`).

### Motion

- **`.term-cursor`** — a `::after` block-cursor glyph in `{colors.primary}` that blinks via the `term-blink` keyframes (`1.1s steps(1) infinite`). It is the single decorative animation and appears at the end of the hero prompt. Everything else is static aside from `transition-colors` on hovers.

## Components

### Navigation

**`navbar`** — sticky top bar, `bg-background/90` with `backdrop-blur`, 1 px bottom border.

- **Brand** is a prompt, not a logo: `diek@portfolio` in `{colors.primary}` followed by `:~$` in `{colors.muted-foreground}`.
- **Links** render as `./about`, `./skills`, … in `{colors.muted-foreground}` with `hover:text-primary`. Desktop: `hidden md:flex`. Mobile: a stacked dropdown toggled by a hamburger (`md:hidden`).
- Includes the light/dark theme toggle (sun/moon icon button).

**`section-heading`** — the shell-prompt header rendered at the top of every section (`components/section-heading.tsx`). Props: `command`, optional `className`.

- Renders `<span primary>diek@portfolio</span><span muted>:</span><span foreground/70>~</span><span muted>$ </span><span foreground>{command}</span>`.
- Commands in use: `cat about.md`, `ls -la ~/stack`, `cat certifications.txt`, `ls projects/`, `git log --author=diek ~/contributions`, `cat experience.log`, `cat education.txt`, `cat awards.txt`, `./contact.sh`.

### Hero (terminal session)

**`hero`** — a simulated login session, left-aligned, `max-w-3xl`.

- A `Last login: …` caption beside the framed penguin logo.
- A sequence of prompt blocks (`whoami` → name, `cat role.txt` → green role, `cat bio.txt` → muted bio, `ls ~/links` → social links).
- A local `Prompt` sub-component renders the `diek@portfolio:~$` chrome reused across blocks.
- Ends on a bare prompt with the blinking `.term-cursor`.

### Cards (terminal panes)

**`card`** (`components/ui/card.tsx`) — `rounded-none border border-border bg-card text-card-foreground`. Flat pane, no shadow. The shared surface for skills, certifications, projects, community, experience, education, awards, and contact-info.

- **Card title** convention: `{colors.primary}` green with a `before:content-['>_']` prefix for list-item titles (projects, community, experience, education) or `before:content-['#_']` for category headings (skills). The about feature cards color their `<h3>` green as keys.
- Project/community cards place the logo in a top region closed by `border-b border-border`.

### Badges / Chips

**`badge`** (`components/ui/badge.tsx`) — `rounded-none border` chips.

- `default` / `outline`: green-tinted — `border-primary/40 text-primary` (with `bg-primary/10` on default). Used for project tags, education institutions, the `[featured]` award flag.
- `secondary`: `bg-secondary text-secondary-foreground` muted chips. Used for skill lists and experience tech stacks.

### Buttons

**`button`** (`components/ui/button.tsx`) — square (`rounded-none`), monospaced labels.

- Primary action (hero "./contact.sh"): green-tinted — `border border-primary/50 bg-primary/10 text-primary hover:bg-primary/20`.
- `outline`: hairline-bordered transparent button (hero "./list-projects.sh", project "Code" / "View More").
- `ghost`/`icon`: nav hamburger, theme toggle, inline icon links.

### Footer

**`footer`** — shares `{colors.background}`, 1 px top border.

- A `diek@portfolio:~$ whoami` prompt with the role tagline beneath, green-hover social links, and a `# {year} Diego Maroto. All rights reserved.` comment line.

## Do's and Don'ts

### Do

- Keep **everything monospaced** (JetBrains Mono). The uniform character grid is the identity.
- Reserve `{colors.primary}` green for prompts, links, titles/keys, the cursor, and the focus ring — accents, never large fills.
- Write section headers as shell commands (`$ cat …`, `$ ls …`) and descriptions as `# comments`.
- Keep surfaces flat: 1 px `{colors.border}` outlines and the subtle dark-mode card lift are the only depth cues.
- Keep every corner square (`{rounded.none}`).
- Maintain both skins from the single token set; verify contrast in light ("paper terminal") and dark.
- Drive responsive layout with CSS breakpoints (`hidden md:flex` / `md:hidden`), never a JS mobile hook for nav structure.

### Don't

- Don't introduce a second typeface or any non-monospaced text.
- Don't add a second accent color or per-section tints — the palette is closed (green + ink + muted + border).
- Don't add soft drop-shadows, blurred elevation, or gradients.
- Don't round corners or add a subtle-radius tier.
- Don't go full retro-CRT: no scanlines, phosphor glow, or all-caps shouting — this is a _modern_ terminal.
- Don't use green as a large background fill or for body copy; it is an ink accent.
