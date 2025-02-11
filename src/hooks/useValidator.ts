import { useContext } from "react";
import { authContext } from "../providers/authProvider";

export function validateCredentials(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export interface User {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  contactNumber: string;
  age: string;
  gender: string;
}

export const useValidateUser = (
  user: User
): { isValid: boolean; errors: Record<string, string> } => {
  const { singedUpUsers } = useContext(authContext);
  const errors: Record<string, string> = {};

  const isEmailDuplicated = singedUpUsers.some(
    (signedUser) => signedUser.email.trim() === user.email.trim()
  );

  console.log(isEmailDuplicated);

  if (!user.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!user.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = "Email address is invalid";
  } else if (isEmailDuplicated) {
    errors.email = "Email address already exists";
  }

  if (!user.password.trim()) {
    errors.password = "Password is required";
  } else if (user.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!user.confirmPassword.trim()) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (user.confirmPassword !== user.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!user.contactNumber.trim()) {
    errors.contactNumber = "Contact number is required";
  } else if (!/^\d{7,}$/.test(user.contactNumber)) {
    errors.contactNumber = "Contact number is invalid";
  }

  if (!user.age.trim()) {
    errors.age = "Age is required";
  } else if (isNaN(Number(user.age)) || Number(user.age) <= 0) {
    errors.age = "Age must be a positive number";
  }

  if (!user.gender.trim()) {
    errors.gender = "Gender is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
