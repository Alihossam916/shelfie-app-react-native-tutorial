import React, { createContext, ReactNode, useState } from "react";

interface AuthProps {
  email: string;
  password: string;
}

interface User {
  // define user fields later if needed
  id?: string;
  email?: string;
}

interface UserContextType {
  user: User | null;
  login: ({ email, password }: AuthProps) => Promise<void>;
  register: ({ email, password }: AuthProps) => Promise<void>;
  logout: () => void;
}

const defaultValue: UserContextType = {
  user: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
};

export const userContext = createContext(defaultValue);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);

  async function login({ email, password }: AuthProps) {}
  async function register({ email, password }: AuthProps) {}
  async function logout() {}

  return (
    <userContext.Provider value={{ user, login, register, logout }}>
      {children}
    </userContext.Provider>
  );
}
