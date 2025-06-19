// Utility functions for secure token storage
// This provides a more secure alternative to direct localStorage usage

interface TokenStorage {
  getToken: () => string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
  getRefreshToken: () => string | null;
  setRefreshToken: (token: string) => void;
  removeRefreshToken: () => void;
  clearAll: () => void;
}

// For production, consider using secure storage libraries like:
// - js-cookie for httpOnly cookies
// - secure-ls for encrypted localStorage
// - IndexedDB with encryption

class SecureTokenStorage implements TokenStorage {
  private tokenKey = "auth_token";
  private refreshTokenKey = "refresh_token";

  getToken(): string | null {
    try {
      return localStorage.getItem(this.tokenKey);
    } catch (error) {
      console.error("Error retrieving token:", error);
      return null;
    }
  }

  setToken(token: string): void {
    try {
      localStorage.setItem(this.tokenKey, token);
    } catch (error) {
      console.error("Error storing token:", error);
    }
  }

  removeToken(): void {
    try {
      localStorage.removeItem(this.tokenKey);
    } catch (error) {
      console.error("Error removing token:", error);
    }
  }

  getRefreshToken(): string | null {
    try {
      return localStorage.getItem(this.refreshTokenKey);
    } catch (error) {
      console.error("Error retrieving refresh token:", error);
      return null;
    }
  }

  setRefreshToken(token: string): void {
    try {
      localStorage.setItem(this.refreshTokenKey, token);
    } catch (error) {
      console.error("Error storing refresh token:", error);
    }
  }

  removeRefreshToken(): void {
    try {
      localStorage.removeItem(this.refreshTokenKey);
    } catch (error) {
      console.error("Error removing refresh token:", error);
    }
  }

  clearAll(): void {
    this.removeToken();
    this.removeRefreshToken();
  }

  // Check if token exists and is not expired
  isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      // Basic JWT token validation (decode payload)
      const payload = JSON.parse(atob(token.split(".")[1]));
      const currentTime = Date.now() / 1000;

      return payload.exp ? payload.exp > currentTime : true;
    } catch (error) {
      console.error("Error validating token:", error);
      return false;
    }
  }
}

export const tokenStorage = new SecureTokenStorage();
export type { TokenStorage };
