import { createContext, useContext, useState } from 'react';

// creating the Context
const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: (el: boolean) => void;
}>(null!);

// creating the Provider
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// helper function to use the Context
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
