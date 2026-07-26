import { useCallback, useState } from "react";
import { ProfileCard } from "../components/ProfileCard";
import { fetchUser } from "../lib/session";
import { Role, type User } from "../types/user";

const seed: User = {
  id: "usr_aurora",
  name: "Alex Morgan",
  email: "alex@aurora-desk.dev",
  role: Role.Admin,
  active: true,
};

export function App() {
  const [user, setUser] = useState<User>(seed);
  const [error, setError] = useState<string | null>(null);

  const onRefresh = useCallback(async (id: User["id"]) => {
    try {
      setError(null);
      const next = await fetchUser(id);
      setUser(next);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      console.error("refresh failed =>", message);
    }
  }, []);

  return (
    <main>
      <ProfileCard user={user} onRefresh={onRefresh} />
      {error && <p role="alert">Warning: {error}</p>}
    </main>
  );
}
