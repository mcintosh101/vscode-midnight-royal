import { Role, type User } from "../types/user";
import { formatGreeting, oldHello } from "../lib/session";
import styles from "./ProfileCard.module.css";

type ProfileCardProps = {
  user: User;
  onRefresh: (id: User["id"]) => void;
};

/**
 * JSX showcase — tags, attributes, expressions, and component structure.
 */
export function ProfileCard({ user, onRefresh }: ProfileCardProps) {
  // Left unused on purpose — semantic token fade for screenshots
  const unusedHint = 42;

  return (
    <section className={styles.card} data-role={user.role} hidden={!user.active}>
      <header className={styles.header}>
        <h1 title={user.email}>{user.name}</h1>
        <span className={styles.badge}>{user.role}</span>
      </header>

      <p className={styles.meta}>{formatGreeting(user)}</p>
      <p className={styles.legacy}>{oldHello(user.name)}</p>

      <footer className={styles.actions}>
        <button type="button" onClick={() => onRefresh(user.id)}>
          Refresh profile
        </button>
        {user.role === Role.Admin && (
          <button type="button" className={styles.danger}>
            Manage access
          </button>
        )}
      </footer>
    </section>
  );
}

export default ProfileCard;
