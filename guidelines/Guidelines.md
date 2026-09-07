# Gurukul Innovation Academy — Design System Guidelines

## Brand Identity
**Company:** Gurukul Innovation Academy  
**Tagline:** Education · Technology · Innovation  
**Core message:** Learn technology. Build technology. Innovate the future.  
**Location:** Kathmandu, Nepal  

---

## Aesthetic Stance: Kinetic Dark-Tech

Full commitment to a **dark space-navy ground** with **electric cyan and violet accents**. Inspired by circuit boards, robotics labs, and mission-control interfaces. Premium, restrained, and youth-forward.

---

## Color System

| Token | Value | Usage |
|---|---|---|
| `--background` | `#05080f` | Page ground |
| `--card` | `#0c1120` | Cards, panels |
| `--muted` | `#111827` | Inputs, subtle surfaces |
| `--primary` | `#00c8f0` | Primary interactive, cyan glow |
| `--secondary` | `#7b61ff` | Accent, violet |
| `--foreground` | `#e8edf5` | Body text |
| `--muted-foreground` | `#6b7a99` | Labels, captions |
| `--border` | `rgba(0,200,240,0.12)` | Hairline rules |
| Success | `#00e6a0` | Online states, completions |
| Warning | `#ffa040` | Enrollment open, caution |

**Brand gradient:** `linear-gradient(135deg, #00c8f0 0%, #7b61ff 100%)`

---

## Typography

| Role | Family | Weight | Size |
|---|---|---|---|
| Display / H1 | Manrope | 800 ExtraBold | 36–48px |
| H2 | Manrope | 700 Bold | 28–32px |
| H3 | Manrope | 600 SemiBold | 20–24px |
| Body | Inter | 400 Regular | 14–16px |
| Label | Inter | 500 Medium | 12px |
| Code / Data | JetBrains Mono | 400 | 12–14px |

**Import order in `src/index.css`:** All Google Fonts `@import` rules must appear before `@import 'tailwindcss'`.

---

## Visual Language

- **Circuit grid:** 40×40px grid at 4% cyan opacity as page texture
- **Glowing nodes:** 5px circles with layered `box-shadow` for pulse effect
- **Tech border:** Corner accents using `::before` / `::after` pseudo-elements
- **Thin borders:** `1px solid rgba(0,200,240,0.12)` — never thick or opaque
- **Subtle shadows:** `box-shadow: 0 8px 32px rgba(0,200,240,0.08)` on hover
- **Rounded corners:** `8px` base radius (`--radius`), cards use `rounded-xl` (12px)
- **Generous whitespace:** Sections separated by 80px+ vertical space

---

## Components Reference

### Buttons
- **Primary:** `bg-[var(--primary)] text-[var(--primary-foreground)]` — cyan fill, dark text
- **Secondary:** `border border-[var(--primary)] text-[var(--primary)]` — outline style
- **Text:** Underline on hover, arrow suffix, primary color

### Cards
- Background: `var(--card)` + `border: 1px solid var(--border)`
- Hover: `translateY(-2px)` + brightened border + subtle glow shadow
- Program cards: icon + level badge + tags + CTA
- Project cards: image header with gradient overlay + status badge
- Stat cards: large number in gradient text + trend badge

### Badges
- Pill shape, `font-mono`, semantic color variants: cyan / violet / green / orange / muted

### Form Fields
- Background: `var(--muted)` — one step lighter than card
- Focus: `border-[var(--primary)]` + `box-shadow: 0 0 0 3px rgba(0,200,240,0.12)`
- Labels: `font-mono` uppercase, `var(--muted-foreground)`

---

## Spacing Scale
Use Tailwind's default scale. Section gaps: `gap-20` (80px). Card padding: `p-5` or `p-6`. Component internal gaps: `gap-2` to `gap-4`.

---

## Responsive Behavior
Single breakpoint at `md` (768px): navigation collapses, grids go to 1 column, stats go to 2 columns.
