// Auth Types
export interface User {
  id: string;
  username: string;
  email?: string;
  token?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  password: string;
  email?: string;
}

// Auth State
export interface AuthState {
  data: User | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  isRegistering: boolean;
  registerError: string | null;
  isRegisterError: boolean;
}

// Redux Action Types
export interface AuthAction {
  type: string;
  payload?: any;
  error?: string;
}

// Navigation Types
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Profile: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
};

// Component Props Types
export interface CustomButtonProps {
  label: string;
  onPress: () => void;
  containerStyle?: object;
  textStyle?: object;
  disabled?: boolean;
  loading?: boolean;
}

export interface CustomTextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: object;
  textStyle?: object;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
}
