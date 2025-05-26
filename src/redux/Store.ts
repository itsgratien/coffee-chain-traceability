import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { accountReducer } from './slices/AccountSlice';

const rootReducer = combineReducers({ accounts: accountReducer });

export const store = () => configureStore({ reducer: rootReducer });

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];
