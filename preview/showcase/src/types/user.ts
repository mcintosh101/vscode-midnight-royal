/** Core domain types for Aurora Desk */

export type UserId = `usr_${string}`;

export interface User {
  id: UserId;
  name: string;
  email: string;
  role: Role;
  active: boolean;
}

export enum Role {
  Admin = "admin",
  Editor = "editor",
  Guest = "guest",
}

export const MAX_SESSION_MINUTES = 45;
export const API_BASE = "https://api.aurora-desk.dev/v1";
