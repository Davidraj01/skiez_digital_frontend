import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/lib/api";

const TOKEN_KEY = "skiez_admin_token";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [username, setUsername] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!token) {
      setChecking(false);
      return;
    }
    api
      .get("/admin/me")
      .then((res) => setUsername(res.data.username))
      .catch(() => {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
      })
      .finally(() => setChecking(false));
  }, [token]);

  async function login(usernameInput, password) {
    const res = await api.post("/admin/login", { username: usernameInput, password });
    localStorage.setItem(TOKEN_KEY, res.data.token);
    setToken(res.data.token);
    setUsername(res.data.username);
  }

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUsername(null);
  }

  return (
    <AuthContext.Provider value={{ token, username, checking, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
