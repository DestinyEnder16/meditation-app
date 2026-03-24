import React, { createContext, useContext, useState } from "react";

type UserData = {
  name: string;
  email: string;
  password: string;
};

type UserContextType = {
  name: string;
  users: UserData[];
  addUser: (user: UserData) => void;
  setName: (name: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [name, setName] = useState("");

  const addUser = (user: UserData) => {
    setUsers((prev) => [...prev, user]);
    setName(user.name);
  };

  return (
    <UserContext.Provider value={{ name, users, addUser, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
