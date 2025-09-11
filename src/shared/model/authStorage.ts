function setCookie(name: string, value: string, days = 7) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name: string) {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1]
    ? decodeURIComponent(document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='))!
        .split('=')[1])
    : null;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

export function getAccessToken() {
  return getCookie("access_token") || undefined;
}

export function setAccessToken(access_token: string) {
  setCookie("access_token", access_token);
}

export function getRefreshToken() {
  return getCookie("refresh_token") || undefined;
}

export function setTokens(access_token: string, refresh_token: string) {
  setCookie("access_token", access_token);
  setCookie("refresh_token", refresh_token);
}

export function clearTokens() {
  deleteCookie("access_token");
  deleteCookie("refresh_token");
}

export function setUserID(id: string) {
    setCookie("userID", id);
}

export function removeUserID() {
    deleteCookie("userID");
}

export function getUserID() {
    return getCookie("userID");
}