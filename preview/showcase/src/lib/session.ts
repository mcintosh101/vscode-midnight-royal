import { API_BASE, MAX_SESSION_MINUTES, type User, type UserId } from "../types/user";

/**
 * Session helpers — rich syntax for theme screenshots.
 * Keywords, strings, functions, types, operators, and comments.
 */

/** Ligature-friendly helpers — keep near the top for screenshot #2 (`=>` `===` `!==` `>=`) */
export const isActive = (user: User): boolean => user.active === true;

export const needsRefresh = (user: User, stale: boolean): boolean =>
  stale !== false && user.role !== "guest";

export const withDefaultName = (user: User): User => ({
  ...user,
  name: user.name.length >= 1 ? user.name : "Guest",
});

export async function fetchUser(id: UserId): Promise<User> {
  const path = `${API_BASE}/users/${id}`;
  const response = await fetch(path, {
    headers: {
      Accept: "application/json",
      "X-Client": "aurora-desk",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to load user ${id}: ${response.status}`);
  }

  return (await response.json()) as User;
}

export function sessionExpiresAt(startedAt: Date): Date {
  const ms = MAX_SESSION_MINUTES * 60 * 1000;
  return new Date(startedAt.getTime() + ms);
}

export function formatGreeting(user: User): string {
  const tone = user.active ? "welcome back" : "good to see you";
  return `${tone}, ${user.name}`;
}

/** @deprecated Prefer formatGreeting() */
export function oldHello(name: string): string {
  return "hi " + name;
}
