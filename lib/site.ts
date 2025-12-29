export const SITE_NAME = "Zaftech";

// Prefer setting NEXT_PUBLIC_SITE_URL in production (e.g. https://zaftech.com)
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000"
);
