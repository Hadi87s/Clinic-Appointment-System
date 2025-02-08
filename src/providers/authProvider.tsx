import React, { createContext, useState } from "react";
import { IUser, Role } from "../types/@types";
import { v4 as uuid } from "uuid";

interface IProps {
  children: React.ReactNode;
}

const INITIAL_USER = {
  id: uuid(),
  email: "",
  password: "",
  role: Role.patient,
};

export const authContext = createContext<{
  user: IUser | null;
  login: (user: IUser) => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = (props: IProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const login = (user: IUser) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <authContext.Provider value={value}> {props.children}</authContext.Provider>
  );
};

export default AuthProvider;
