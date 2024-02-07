import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import MainNavigation from './src/navigator/MainNavigation';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    </View>
  )
}

export default App
