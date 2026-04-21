import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { persistReducer, persistStore, Persistor } from 'redux-persist';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';
import { LoginCredentials, RegisterCredentials, User, AuthState } from '../../types';

export interface RootState {
  auth: AuthState;
}

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['auth'],
};

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    blacklist: [],
};

const rootReducer = combineReducers<RootState>({
    auth: persistReducer(authPersistConfig, auth) as any,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

interface ConfigureStoreResult {
  store: Store<RootState>;
  persistor: Persistor;
  runSaga: SagaMiddleware<any>['run'];
}

export default function configureStore(): ConfigureStoreResult {
    let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware)) as unknown as Store<RootState>;
    let persistor: Persistor = persistStore(store);
    let runSaga: SagaMiddleware<any>['run'] = sagaMiddleware.run;
    
    return { store, persistor, runSaga };
}
