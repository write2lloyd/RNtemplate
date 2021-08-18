import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './app/Store';
import EntryPoint from './app/EntryPoint';
import theme from './app/themes/AppTheme';

const App = () => {
  const { store, persistor } = configureStore();
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <EntryPoint />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
