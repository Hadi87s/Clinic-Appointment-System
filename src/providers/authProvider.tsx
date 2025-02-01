import React, { createContext, useState } from "react";
import { IUser, Role } from "../types/@types";
interface IProps {
  children: React.ReactNode;
}

const INITIAL_USER = {
  email: "",
  password: "",
  role: Role.patient,
};

export const authContext = createContext<{
  user: IUser | null;
  login: (user: IUser) => void;
  logout: () => void;
}>({
  user: INITIAL_USER,
  login: () => {},
  logout: () => {},
});

const AuthProvider = (props: IProps) => {
  const [user, setUser] = useState<IUser | null>(INITIAL_USER);

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
