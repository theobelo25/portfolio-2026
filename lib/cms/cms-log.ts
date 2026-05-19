/** Logged in all environments when the CMS returns rows that all fail validation. */
export function logCmsTotalParseFailure(context: string, rawCount: number) {
  console.error(
    `[cms] ${context}: ${rawCount} item(s) returned but none passed validation`,
  );
}
