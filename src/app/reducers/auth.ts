import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_COMPLETE, 
  USER_LOGIN_ERROR, 
  RESET_USER_LOGIN,
  USER_REGISTER_REQUEST,
  USER_REGISTER_COMPLETE,
  USER_REGISTER_ERROR,
  RESET_USER_REGISTER,
  AuthActionTypes
} from "../actions";
import { AuthState } from '../../types';

const INITIALSTATE: AuthState = {
  data: null,
  isLoading: false,
  isError: false,
  error: null,
  isRegistering: false,
  registerError: null,
  isRegisterError: false,
};

export default function authReducer(
  state: AuthState = INITIALSTATE, 
  action: AuthActionTypes
): AuthState {
  console.log(`Auth reducer: ${action.type}`);
  
  switch (action.type) {
    // Login actions
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        data: null,
        isLoading: true,
        isError: false,
        error: null,
      };

    case USER_LOGIN_COMPLETE:
      return {
        ...state,
        data: action.payload || null,
        isLoading: false,
        isError: false,
        error: null,
      };

    case USER_LOGIN_ERROR:
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: true,
        error: action.error || 'Login failed',
      };

    case RESET_USER_LOGIN:
      return INITIALSTATE;

    // Registration actions
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        isRegistering: true,
        registerError: null,
        isRegisterError: false,
      };

    case USER_REGISTER_COMPLETE:
      return {
        ...state,
        isRegistering: false,
        registerError: null,
        isRegisterError: false,
      };

    case USER_REGISTER_ERROR:
      return {
        ...state,
        isRegistering: false,
        registerError: action.error || 'Registration failed',
        isRegisterError: true,
      };

    case RESET_USER_REGISTER:
      return {
        ...state,
        isRegistering: false,
        registerError: null,
        isRegisterError: false,
      };

    default:
      return state;
  }
}
