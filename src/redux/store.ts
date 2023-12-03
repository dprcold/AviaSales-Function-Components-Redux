import { configureStore, Store } from '@reduxjs/toolkit';

import rootReducer from './combineReducers';

export const store: Store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
