import React, { createContext } from "react";
import { IUser, Role } from "../types/@types";
import { v4 as uuid } from "uuid";
import { usePersistentState } from "../hooks/usePersistentState";

interface IProps {
  children: React.ReactNode;
}

const INITIAL_USER = {
  id: uuid(),
  fullName: "",
  email: "",
  password: "",
  contactNumber: "",
  age: "",
  gender: "",
  role: Role.patient,
};

export const authContext = createContext<{
  user: IUser | null;
  singedUpUsers: IUser[];
  login: (user: IUser) => void;
  logout: () => void;
  signUserUp: (signedUser: IUser) => void;
}>({
  user: null,
  singedUpUsers: [],
  login: () => {},
  logout: () => {},
  signUserUp: () => {},
});

const AuthProvider = (props: IProps) => {
  // const [user, setUser] = useState<IUser | null>(null);
  const [user, setUser] = usePersistentState<IUser | null>(
    "user",
    INITIAL_USER
  );

  const [singedUpUsers, setSignedUpUsers] = usePersistentState<IUser[]>(
    "signedUp",
    []
  );

  const signUserUp = (signedUser: IUser) => {
    setSignedUpUsers((old) => [...old, signedUser]);
  };

  const login = (user: IUser) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    singedUpUsers,
    login,
    logout,
    signUserUp,
  };

  return (
    <authContext.Provider value={value}> {props.children}</authContext.Provider>
  );
};

export default AuthProvider;
