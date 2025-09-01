export function getAccessToken() {
  return localStorage.getItem("access_token");
}

export function setAccessToken(access_token: string) {
  localStorage.setItem("access_token", access_token);
}

export function getRefreshToken() {
  return localStorage.getItem("refresh_token");
}

export function setTokens(access_token: string, refresh_token: string) {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
}

export function clearTokens() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user_id");
}

export function setUserId(id: string) {
  localStorage.setItem("user_id", id);
}

export function getUserId() {
  return localStorage.getItem("user_id");
}
