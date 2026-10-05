import React, { createContext, useState, useEffect } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

interface AuthProps {
  email: string;
  password: string;
}

interface User {
  // define user fields later if needed
  id?: string;
  email?: string;
  name?: string;
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
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    getInitialUserValue();
  }, []);

  async function login({ email, password }: AuthProps) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error: any) {
      throw Error(error.message);
    }
  }
  async function register({ email, password }: AuthProps) {
    try {
      await account.create(ID.unique(), email, password);
      await login({ email, password });
    } catch (error: any) {
      throw Error(error.message);
    }
  }
  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function getInitialUserValue() {
    try {
      account.get().then(setUser);
    } catch (error) {
      setUser(null);
    } finally {
      setAuthChecked(true);
    }
  }

  return (
    <userContext.Provider value={{ user, login, register, logout }}>
      {children}
    </userContext.Provider>
  );
}
