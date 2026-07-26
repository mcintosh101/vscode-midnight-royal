# GitHub project setup (copy-paste)

Use these values when creating [https://github.com/new](https://github.com/new).

## Repository

| Field | Value |
|-------|--------|
| **Owner** | `mcintosh101` |
| **Repository name** | `midnight-royal` |
| **Visibility** | Public |
| **Add README** | No (this repo already has one) |
| **Add .gitignore** | No (already present) |
| **Add license** | No (already `LICENSE` — MIT) |

## About (sidebar)

**Description** (short — GitHub About):

```text
Muted purple-to-blue colour theme for VS Code and Cursor, paired with the Midnight Royal Starship prompt.
```

**Website:**

```text
https://github.com/mcintosh101/starship-midnight-royal
```

(Or leave blank until the Marketplace page exists.)

**Topics** (add one by one):

```text
vscode
vscode-theme
cursor
cursor-theme
color-theme
dark-theme
starship
fira-code
material-icon-theme
midnight-royal
```

**Features to enable (recommended):**

- Issues — on  
- Discussions — optional  
- Projects — off unless you want a board  
- Wiki — off (README is enough)  
- Sponsorship — optional  

## Social preview

After the first push, set **Settings → General → Social preview** to `assets/01-hero.png` (or a cropped square from it).

## Create + push (local)

From the project root, after the empty GitHub repo exists:

```sh
cd ~/Sites/midnight-royal

git status
git add .
git commit -m "$(cat <<'EOF'
Initial release of Midnight Royal for VS Code and Cursor.

EOF
)"

git branch -M main
git remote add origin https://github.com/mcintosh101/midnight-royal.git
git push -u origin main
```

If `origin` already exists:

```sh
git remote set-url origin https://github.com/mcintosh101/midnight-royal.git
git push -u origin main
```

## First release (optional)

**Tag:** `v1.0.0`  
**Title:** `Midnight Royal v1.0.0`  

**Release notes:**

```markdown
First public release of **Midnight Royal** — a calm purple-to-blue theme for VS Code and Cursor.

### Highlights
- Workbench, syntax, and semantic colours from the Midnight Royal Starship palette
- Integrated terminal colours matched to the companion prompt
- Recommended defaults: Fira Code Nerd Font, ligatures, Material Icon Theme, word wrap

### Install
Download the `.vsix` from this release (or build with `npx @vscode/vsce package`), then:

```sh
cursor --install-extension ./midnight-royal-1.0.0.vsix
```

Pairs with [starship-midnight-royal](https://github.com/mcintosh101/starship-midnight-royal).
```

Attach the built `midnight-royal-1.0.0.vsix` as a release asset.

## Marketplace later

Publishing to the VS Code Marketplace needs a Personal Access Token and `vsce publish`. Not required to put the source on GitHub.
