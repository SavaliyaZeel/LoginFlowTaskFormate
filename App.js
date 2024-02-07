import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store';
import MainNavigation from './src/navigator/MainNavigation';

const App = () => {
  return (
    <View style={{flex:1}}>
      <Provider store={store}>
        <MainNavigation/>
      </Provider>
    </View>
  )
}

export default App
