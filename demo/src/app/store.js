import { configureStore } from '@reduxjs/toolkit';

import yourPostReducer from '../features/yourPost/yourPostSlice';
import inputYourPostReducer from '../features/yourPost/inputYourPostSlice'
export const store = configureStore({
    reducer: {
        yourPost: yourPostReducer,
        inputYourPost : inputYourPostReducer
    },
});