"""Aurora Desk API stubs — for multi-language screenshot colour."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Literal


Role = Literal["admin", "editor", "guest"]


@dataclass
class User:
    id: str
    name: str
    role: Role
    active: bool = True


def greet(user: User) -> str:
    # Comments should sit quietly in blue_deep
    tone = "welcome back" if user.active else "hello again"
    return f"{tone}, {user.name}"


def healthcheck() -> dict[str, str | bool]:
    return {
        "ok": True,
        "service": "aurora-desk",
        "version": "0.4.2",
    }


if __name__ == "__main__":
    sample = User(id="usr_aurora", name="Alex", role="admin")
    print(greet(sample))
