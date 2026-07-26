/**
 * Midnight Royal — syntax showcase
 * Open this file to review TextMate token colours.
 * Each section is labelled with the theme role to look at.
 */

// COMMENT — single-line and block comments (blue_deep, italic)

// KEYWORDS — purple (const, function, return, async, class, type, …)
// OPERATORS — purple_mid (=, =>, ?, :, +, …)
// STRINGS — green
// NUMBERS / CONSTANTS — yellow
// FUNCTIONS — blue
// TYPES & CLASSES — yellow
// VARIABLES — foam
// PROPERTIES / ATTRIBUTES — purple_mid
// TAGS — purple
// PUNCTUATION — muted foam
// INVALID — red (see bottom)

const API_URL = "https://example.com/api";
const MAX_RETRIES = 3;
const ENABLED = true;
const NOTHING = null;

type UserId = string;

interface User {
  id: UserId;
  name: string;
  active: boolean;
}

enum Role {
  Admin = "admin",
  Guest = "guest",
}

class UserService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetchUser(id: UserId): Promise<User> {
    const path = `${this.baseUrl}/users/${id}`;
    const response = await fetch(path);
    return (await response.json()) as User;
  }
}

function greet(user: User): string {
  const label = user.active ? "active" : "idle";
  return `Hello, ${user.name} (${label})`;
}

const service = new UserService(API_URL);
const sample: User = {
  id: "u_01",
  name: "Alex",
  active: true,
};

const message = greet(sample);
const sum = MAX_RETRIES + 1;
const flagged = ENABLED && sample.active;

// JSX — TAGS (purple) + ATTRIBUTES (purple_mid) + STRINGS (green)
export function ProfileCard({ user }: { user: User }) {
  return (
    <section className="card" data-role={Role.Guest} hidden={!user.active}>
      <h1 title={user.name}>{user.name}</h1>
      <p className="meta">{greet(user)}</p>
      <button type="button" onClick={() => service.fetchUser(user.id)}>
        Refresh
      </button>
    </section>
  );
}

export default ProfileCard;

/*
 * SEMANTIC extras (need the TS language service — usually on in Cursor):
 * - UNUSED — muted foam (declare but never read)
 * - DEPRECATED — muted + strikethrough
 */
function semanticExtras() {
  const unusedLocal = 42; // should look muted (*.unused)

  /** @deprecated Use greet() instead */
  function oldGreet(name: string) {
    return "hi " + name;
  }

  return oldGreet(sample.name);
}

/*
 * INVALID — uncomment the next line to see the red invalid/error token style
 * (also shows as an editor squiggle if the TS language service is active)
 */
// const !!!broken = ;

void semanticExtras;
