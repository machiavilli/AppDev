import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

import AppNav from './src/navigations';

import rootSaga from './src/app/sagas';
import configureStore from './src/app/reducers';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor, runSaga } = configureStore();
runSaga(rootSaga);

const App: React.FC = () => {
  const containerStyle: StyleProp<ViewStyle> = { flex: 1 };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={containerStyle}>
          <AppNav />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
