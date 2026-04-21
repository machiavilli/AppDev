import { takeLatest, call, put } from 'redux-saga/effects';
import { 
  USER_LOGIN, 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_COMPLETE, 
  USER_LOGIN_ERROR,
  USER_REGISTER,
  USER_REGISTER_REQUEST,
  USER_REGISTER_COMPLETE,
  USER_REGISTER_ERROR
} from '../actions';
import { userLogin as userLoginApi, userRegister as userRegisterApi } from '../api/auth';
import { LoginCredentials, RegisterCredentials, User } from '../../types';

// Saga action types
interface UserLoginAction {
  type: typeof USER_LOGIN;
  payload: LoginCredentials;
}

interface UserRegisterAction {
  type: typeof USER_REGISTER;
  payload: RegisterCredentials;
}

export function* userLoginAsync(action: UserLoginAction): Generator<any, void, unknown> {
  console.log('🔐 User login saga started: ', action.payload);

  try {
    yield put({ type: USER_LOGIN_REQUEST });

    const data = (yield call(userLoginApi, action.payload)) as User;
    console.log('✅ Login API response: ', data);

    yield put({
      type: USER_LOGIN_COMPLETE,
      payload: data,
    });
    
    console.log('✅ User login completed successfully');
  } catch (error) {
    console.error('❌ User login saga error: ', error);
    yield put({
      type: USER_LOGIN_ERROR,
      error: error instanceof Error ? error.message : 'Login failed',
    });
  }
}

export function* userRegisterAsync(action: UserRegisterAction): Generator<any, void, unknown> {
  console.log('📝 User registration saga started: ', action.payload);

  try {
    yield put({ type: USER_REGISTER_REQUEST });

    const data = yield call(userRegisterApi, action.payload);
    console.log('✅ Registration API response: ', data);

    yield put({
      type: USER_REGISTER_COMPLETE,
      payload: data,
    });
    
    console.log('✅ User registration completed successfully');
  } catch (error) {
    console.error('❌ User registration saga error: ', error);
    yield put({
      type: USER_REGISTER_ERROR,
      error: error instanceof Error ? error.message : 'Registration failed',
    });
  }
}

export function* userLogin(): Generator<any, void, unknown> {
  yield takeLatest(USER_LOGIN, userLoginAsync);
}

export function* userRegister(): Generator<any, void, unknown> {
  yield takeLatest(USER_REGISTER, userRegisterAsync);
}
