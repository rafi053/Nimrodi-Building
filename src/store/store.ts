import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './Rolereducer';
import floorReducer from './floorreducer';

export const store = configureStore({
    reducer: {
    role: roleReducer,
    floor: floorReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;