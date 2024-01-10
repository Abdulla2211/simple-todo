'use client';

import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface Props {
  children: React.ReactNode;
}

export default function CustomProvider({ children }: Props) {
  return (
    <Provider store={store} stabilityCheck="always">
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
