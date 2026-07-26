/**
 * Lightweight React/JSX shims for the screenshot project.
 * Prefer real `@types/react` via `npm install` when you can;
 * these keep the editor clean without node_modules.
 */

declare module "react" {
  export type ReactNode = unknown;
  export type ReactElement = unknown;

  export function useState<S>(
    initial: S | (() => S),
  ): [S, (value: S | ((prev: S) => S)) => void];

  export function useCallback<T extends (...args: never[]) => unknown>(
    fn: T,
    deps: readonly unknown[],
  ): T;

  export const StrictMode: (props: { children?: ReactNode }) => ReactElement;

  export default React;
  const React: {
    createElement: (...args: unknown[]) => ReactElement;
    Fragment: unique symbol;
  };
}

declare module "react/jsx-runtime" {
  export const jsx: (...args: unknown[]) => unknown;
  export const jsxs: (...args: unknown[]) => unknown;
  export const Fragment: unique symbol;
}

declare module "react-dom/client" {
  import type { ReactNode } from "react";

  export function createRoot(container: Element): {
    render(children: ReactNode): void;
  };
}

declare namespace React {
  type ReactNode = import("react").ReactNode;
  type ReactElement = import("react").ReactElement;

  interface HTMLAttributes<T> {
    className?: string;
    title?: string;
    hidden?: boolean;
    role?: string;
    children?: ReactNode;
    onClick?: (event: unknown) => void;
    // Allow data-* and other DOM attrs used in the showcase
    [key: string]: unknown;
  }

  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    type?: "button" | "submit" | "reset";
  }

  interface IntrinsicElements {
    main: HTMLAttributes<HTMLElement>;
    section: HTMLAttributes<HTMLElement>;
    header: HTMLAttributes<HTMLElement>;
    footer: HTMLAttributes<HTMLElement>;
    h1: HTMLAttributes<HTMLElement>;
    p: HTMLAttributes<HTMLElement>;
    span: HTMLAttributes<HTMLElement>;
    button: ButtonHTMLAttributes<HTMLButtonElement>;
    [elemName: string]: HTMLAttributes<HTMLElement>;
  }
}

declare namespace JSX {
  type Element = React.ReactElement;
  type ElementClass = never;
  interface ElementAttributesProperty {
    props: unknown;
  }
  interface ElementChildrenAttribute {
    children: unknown;
  }
  type IntrinsicElements = React.IntrinsicElements;
}
