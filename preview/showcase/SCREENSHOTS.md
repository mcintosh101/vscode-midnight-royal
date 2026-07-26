# Screenshot guide — Midnight Royal

Use the **Aurora Desk** files in this folder. Aim for a clean window: hide chat if it crowds the frame, keep Material Icon Theme on, Fira Code + ligatures on, Midnight Royal active.

Paths below are relative to `preview/showcase/`.

## Before you start

1. Open this folder as the workspace, **or** open the `midnight-royal` repo and expand `preview/showcase` in the explorer.
2. Optional but best: run `npm install` inside `preview/showcase` so real React types load. Ambient shims are included so screenshots still work without it.
3. Confirm:
   - Colour theme: **Midnight Royal**
   - File icons: **Material Icon Theme**
   - Font: **FiraCode Nerd Font Mono**, ligatures on, editor size 15
4. Show the **Activity bar**, **Side bar**, **Status bar**, and **Panel** (terminal).
5. Optional but strong: enable breadcrumbs (View → Appearance → Breadcrumbs).
6. Use a dark macOS appearance so title bar chrome stays consistent.
7. Capture at a comfortable window size — roughly **1440×900** or **1680×1050**. Avoid ultra-ultrawide for Marketplace thumbs.
8. Hero / syntax shots should be **error-free** (no red squiggles). Intentional demos only: unused `unusedHint` in `ProfileCard.tsx`, `@deprecated` `oldHello` in `session.ts`.

Save images under `assets/` in the theme repo, e.g. `assets/01-hero.png`.

---

## Shot list (verified against file contents)

### 1. Hero — full IDE (must-have)

**What it sells:** the whole product look in one frame.

**Stage**
- Explorer expanded: `src/` → `components/`, `lib/`, `config/`, `server/`; also `docs/`
- Tabs open (left → right): `ProfileCard.tsx`, `session.ts`, `src/config/app.json`
- Active tab: **`src/components/ProfileCard.tsx`** — centre the JSX `return (` starting at line 17 (`<section className={styles.card}…>`)
- Terminal open at the bottom (~30% height) with Midnight Royal Starship prompt if you use it
- Status bar visible

**Filename:** `assets/01-hero.png`

---

### 2. Syntax close-up — TypeScript

**What it sells:** keywords, strings, functions, types, ligatures.

**Stage**
- Full-width editor (collapse sidebar with `Cmd+B` if you want more code)
- Open **`src/lib/session.ts`**
- Frame the **top of the file** — lines with `isActive`, `needsRefresh`, `withDefaultName` (right after the file comment). These contain `=>`, `===`, `!==`, and `>=`
- You should also see imports, template strings in `fetchUser` if you scroll slightly, but ligatures are at the top

**Filename:** `assets/02-syntax-typescript.png`

---

### 3. JSX + CSS split

**What it sells:** tags/attributes vs CSS tokens side by side.

**Stage**
- Split editor:
  - Left: `src/components/ProfileCard.tsx` — show the `return (` JSX block
  - Right: `src/components/ProfileCard.module.css` — show `.card` (line 2) and `.badge` (line 24)

**Filename:** `assets/03-jsx-css-split.png`

---

### 4. Explorer + Material icons

**What it sells:** file/folder icons on mid-surface chrome.

**Stage**
- Sidebar wide enough to read names
- Expand: `src/components`, `src/lib`, `src/config`, `src/server`, `docs`
- Distinct icons in tree: `ProfileCard.tsx`, `ProfileCard.module.css`, `app.json`, `routes.py`, `Dockerfile`, `package.json`
- Active file: **`Dockerfile`** or **`package.json`** (both sit at showcase root)

**Filename:** `assets/04-explorer-icons.png`

---

### 5. Terminal + Starship

**What it sells:** panel `#1e1e2e` and prompt parity with starship-midnight-royal.

**Stage**
- Panel focused on Terminal
- `cd` into `preview/showcase` (or this folder if it is the workspace root)
- Show a clean Starship line (directory + git + time)
- Run `ls` or `git status`
- Editor above: `docs/overview.md` or `src/lib/session.ts`

**Filename:** `assets/05-terminal-starship.png`

---

### 6. Command palette / Quick Open

**What it sells:** overlay chrome (`#1e1e2e`, blue focus row).

**Stage**
- Behind the palette, leave `src/lib/session.ts` or `ProfileCard.tsx` open
- `Cmd+P` or `Cmd+Shift+P`
- Type enough that one row is focused (blue wash)
- Keep the dimmed editor visible behind the palette

**Filename:** `assets/06-quick-input.png`

---

### 7. Git decorations + diff (optional)

**What it sells:** green / blue / red git language.

**Stage**
- Make a tiny uncommitted edit in `src/lib/session.ts` (add a comment) and save
- Explorer shows modified decoration on `session.ts`
- Open the diff from Source Control for that file

**Filename:** `assets/07-git-diff.png`

Revert the throwaway edit after shooting unless you want it committed.

---

### 8. Markdown docs

**What it sells:** headings, links, tables.

**Stage**
- Open **`docs/overview.md`**
- Frame from `# Aurora Desk` through the **Colour cues** table (roles → colours) and the Starship link at the bottom

**Filename:** `assets/08-markdown.png`

---

### 9. Multi-language strip (optional)

**What it sells:** breadth — TS, Python, JSON, Docker.

**Stage**
- Four tabs: `src/lib/session.ts`, `src/server/routes.py`, `src/config/app.json`, `Dockerfile`
- Active: **`src/server/routes.py`** — show `def greet(user: User) -> str:` (line 20)

**Filename:** `assets/09-multilang.png`

---

### 10. Square / Marketplace crop (optional)

**What it sells:** tiny preview for listings.

**Stage**
- Crop shot **2** (ligatures at top of `session.ts`) to a square focusing on purple/blue/green tokens
- Or crop the JSX block from shot **1**

**Filename:** `assets/10-marketplace-square.png`

---

## Core gallery (what the README uses)

These three cover the rest without needing separate explorer / terminal / multilang shots:

1. Hero (`assets/01-hero.png`) — workbench + icons + JSX + terminal  
2. Syntax (`assets/02-syntax-typescript.png`) — tokens + ligatures  
3. Split (`assets/03-jsx-css-split.png`) — JSX + CSS side by side  

Shots 4–10 below stay optional if you want extras later.

---

## Capture tips (macOS)

- Full window: `Cmd+Shift+4`, then `Space`, click the Cursor window  
- Prefer PNG  
- Save under repo `assets/`
