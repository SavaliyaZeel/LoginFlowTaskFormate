import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import from the new package

import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

// Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage from @react-native-async-storage/async-storage
  whitelist: ['authReducer'], // reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

// Export store and persistor
export { store };

export const persistor = persistStore(store);
