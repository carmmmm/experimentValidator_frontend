import { configureStore } from '@reduxjs/toolkit';
import experimentReducer from './experimentSlice';

export const store = configureStore({
    reducer: {
        experiment: experimentReducer,
    },
});