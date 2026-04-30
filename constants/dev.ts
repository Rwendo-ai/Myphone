/**
 * Dev unlock flag. Set EXPO_PUBLIC_DEV_UNLOCK_ALL=1 in .env.local to bypass
 * every entitlement check (modules 5-10, non-starter courses, AI tier
 * requirements). Strip from production EAS builds — see PRODUCT-DESIGN.md
 * §8 Phase E.
 *
 * No runtime UI for this flag. It's a build-time constant. The only way it
 * can be on in a shipped binary is if you forgot to omit the env var when
 * building — that's a CI guard, not a runtime guard.
 */
export const DEV_UNLOCK_ALL = process.env.EXPO_PUBLIC_DEV_UNLOCK_ALL === '1';
