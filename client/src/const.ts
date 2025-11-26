export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

const base = import.meta.env.BASE_URL || "/";
const normalizedBase = base.endsWith("/") ? base : `${base}/`;

const withBase = (path: string | undefined) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  const trimmed = path.replace(/^\\/+/, "");
  return `${normalizedBase}${trimmed}`;
};

export const APP_TITLE =
  import.meta.env.VITE_APP_TITLE || "FUKUOKA海外系サークルAWARD";

export const APP_LOGO =
  withBase(import.meta.env.VITE_APP_LOGO) ||
  `${normalizedBase}awdlogo.png`;

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
