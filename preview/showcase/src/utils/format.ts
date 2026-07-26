export const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

export function joinPath(...parts: string[]): string {
  return parts.filter(Boolean).join("/").replace(/\/+/g, "/");
}

// Intentional style variety for ligatures in screenshots:
// =>  !==  ===  >=  <=  |>
export const pipeline = <T>(value: T, map: (input: T) => T): T => map(value);
