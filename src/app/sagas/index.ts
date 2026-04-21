import { all } from 'redux-saga/effects';
import { userLogin, userRegister } from './auth';

export default function* rootSaga(): Generator<any, void, unknown> {
    yield all([
        // AUTH/Login
        userLogin(),
        // AUTH/Register
        userRegister(),
    ]);
}
