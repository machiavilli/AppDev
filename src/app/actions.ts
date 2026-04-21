import { LoginCredentials, RegisterCredentials, User, AuthAction } from '../types';

// Action Types
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_COMPLETE = 'USER_LOGIN_COMPLETE';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const RESET_USER_LOGIN = 'RESET_USER_LOGIN';

export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_COMPLETE = 'USER_REGISTER_COMPLETE';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';
export const RESET_USER_REGISTER = 'RESET_USER_REGISTER';

// Action Creators
export const authLogin = (payload: LoginCredentials): AuthAction => ({
  type: USER_LOGIN,
  payload,
});

export const authLogout = (): AuthAction => ({
  type: RESET_USER_LOGIN,
});

export const authRegister = (payload: RegisterCredentials): AuthAction => ({
  type: USER_REGISTER,
  payload,
});

export const resetAuthState = (): AuthAction => ({
  type: RESET_USER_LOGIN,
});

// Specific action types for TypeScript
export interface UserLoginRequestAction extends AuthAction {
  type: typeof USER_LOGIN_REQUEST;
}

export interface UserLoginCompleteAction extends AuthAction {
  type: typeof USER_LOGIN_COMPLETE;
  payload: User;
}

export interface UserLoginErrorAction extends AuthAction {
  type: typeof USER_LOGIN_ERROR;
  error: string;
}

export interface UserRegisterRequestAction extends AuthAction {
  type: typeof USER_REGISTER_REQUEST;
}

export interface UserRegisterCompleteAction extends AuthAction {
  type: typeof USER_REGISTER_COMPLETE;
}

export interface UserRegisterErrorAction extends AuthAction {
  type: typeof USER_REGISTER_ERROR;
  error: string;
}

export interface ResetUserLoginAction extends AuthAction {
  type: typeof RESET_USER_LOGIN;
}

export interface ResetUserRegisterAction extends AuthAction {
  type: typeof RESET_USER_REGISTER;
}

// Union type for all auth actions
export type AuthActionTypes = 
  | UserLoginRequestAction
  | UserLoginCompleteAction
  | UserLoginErrorAction
  | ResetUserLoginAction
  | UserRegisterRequestAction
  | UserRegisterCompleteAction
  | UserRegisterErrorAction
  | ResetUserRegisterAction;

// Extend AuthAction to include index signature for Redux compatibility
declare global {
  interface AuthAction {
    type: string;
    payload?: any;
    error?: string;
    [key: string]: any;
  }
}
