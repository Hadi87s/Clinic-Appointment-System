import React, { createContext } from "react";
import { IUser } from "../types/@types";
import { usePersistentState } from "../hooks/usePersistentState";

interface IProps {
  children: React.ReactNode;
}

export const authContext = createContext<{
  user: IUser | null;
  singedUpUsers: IUser[];
  login: (user: IUser) => void;
  logout: () => void;
  signUserUp: (signedUser: IUser) => void;
  updateUser: (updatedUser: IUser) => void;
}>({
  user: null,
  singedUpUsers: [],
  login: () => {},
  logout: () => {},
  signUserUp: () => {},
  updateUser: () => {},
});

const AuthProvider = (props: IProps) => {
  const [user, setUser] = usePersistentState<IUser | null>("user", null);
  const [singedUpUsers, setSignedUpUsers] = usePersistentState<IUser[]>("signedUp", []);

  const signUserUp = (signedUser: IUser) => {
    setSignedUpUsers((old) => [...old, signedUser]);
  };

  const login = (user: IUser) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updatedUser: IUser) => {
    setSignedUpUsers((oldUsers) =>
      oldUsers.map((user) => (user.id === updatedUser.id ? { ...user, ...updatedUser } : user))
    );

    if (user?.id === updatedUser.id) {
      setUser(updatedUser);
    }
  };

  const value = {
    user,
    singedUpUsers,
    login,
    logout,
    signUserUp,
    updateUser,
  };

  return <authContext.Provider value={value}>{props.children}</authContext.Provider>;
};

export default AuthProvider;
