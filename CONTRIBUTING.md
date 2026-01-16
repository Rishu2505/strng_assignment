# Development Guidelines

These guidelines enforce a high-quality engineering standard for the codebase. All contributors must adhere to these rules to ensure scalability, maintainability, and review readiness.

## 1. Strict Typing Policy (TypeScript)
❌ **Forbidden**:
- `any` types. (Use `unknown` if truly generic, or define a type).
- `@ts-ignore`. (Fix the underlying type mismatch instead).

✅ **Required**:
- Explicit interfaces for all Props.
- Shared types defined in `@/src/types`.
- strict null checks (enabled in config).

## 2. Styling Architecture
❌ **Forbidden**:
- **Inline Styles**: e.g., `<View style={{ margin: 10 }} />`.
  - *Reason*: Causes re-renders (new object reference) and scatters design tokens.
- **Magic Numbers**: e.g., `padding: 18`.
  - *Reason*: breaks design system consistency.

✅ **Required**:
- Use `styles.ts` with `StyleSheet.create`.
- Use the `useThemedStyles()` hook for dynamic themes.
- Use metrics utilities (`m()`, `v()`) for responsive layout values.

## 3. Component Structure
- **Functional only**: No Class components.
- **Descriptive Naming**: Components should be named explicitly (e.g., `UserProfileCard` not `Card`).
- **Composition**: Break large components (over 150 lines) into smaller sub-components.

## 4. Code Hygiene
- **No Console Logs**: Production builds must be noise-free.
- **Strict Equality**: Always use `===`, never `==`.
- **Hooks Rules**: `exhaustive-deps` rule is set to `ERROR`. Do not lie to the dependency array.

## 5. Commenting Standard
Write comments for the **"Why"**, not the "How".
- **Bad**: `// Increment count` (Redundant)
- **Good**: `// Optimistic update to make UI feel instant before server response`

---
*These rules are enforced automatically via ESLint. Violations will block the build.*
