// Re-export all utilities for easy importing
export { default as ROUTES } from './routes';
export { default as IMG } from './images';

// Utility functions
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const validateUsername = (username: string): boolean => {
  return username.length >= 3 && username.length <= 20;
};

export const formatErrorMessage = (error: any): string => {
  if (typeof error === 'string') {
    return error;
  }
  if (error?.message) {
    return error.message;
  }
  return 'An unexpected error occurred';
};

export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);
};
