import { createContext, useContext, useState } from 'react';

// creating the Context
const ScreenContext = createContext<{
  isWelcomed: boolean;
  setIsWelcomed: (el: boolean) => void;
}>(null!);

// creating the Provider
export function ScreenInfoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isWelcomed, setIsWelcomed] = useState<boolean>(false);

  return (
    <ScreenContext.Provider value={{ isWelcomed, setIsWelcomed }}>
      {children}
    </ScreenContext.Provider>
  );
}

// creating helper function to use Context
export function useScreenInfo() {
  const ctx = useContext(ScreenContext);

  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
