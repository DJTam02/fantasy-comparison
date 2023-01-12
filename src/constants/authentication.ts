export const REQUEST_AUTH_URL = "https://api.login.yahoo.com/oauth2/request_auth";

export const REFRESH_TOKEN_COOKIE = "refresh_token";
export const ACCESS_TOKEN_COOKIE = "access_token";

export const REDIRECT_URI = window.location.origin + (window.location.pathname === "/" ? "" : window.location.pathname) + "/authenticate";
