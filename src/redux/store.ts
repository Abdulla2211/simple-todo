'use client';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { apiSlice } from './services/apiSlice';
import rootReducer from './rootReducer';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { WebStorage } from 'redux-persist/lib/types';

export function createPersistStorage(): WebStorage {
  const isServer = typeof window === 'undefined';

  // Returns noop (dummy) storage.
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }

  return createWebStorage('local');
}

const storage = createPersistStorage();

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [apiSlice.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: false, // Включено только в режиме разработки
});

export const persistor = persistStore(store);

export type RootState = ReturnType<(typeof store)['getState']>;
export type AppDispatch = (typeof store)['dispatch'];
