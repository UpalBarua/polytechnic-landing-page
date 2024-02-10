import { auth } from "@/firebase/firebase.config";
import { User, onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextProps = {
  user: User | null;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoading: true,
});

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext not found");
  }

  return context;
};
