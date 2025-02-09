export function validateCredentials(email: string, password: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return emailRegex.test(email) && passwordRegex.test(password);
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

export const validateUser = (user: User): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!user.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!user.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = "Email address is invalid";
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
  } else if (!/^\d{10}$/.test(user.contactNumber)) {
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
