import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import productsSlice from './productsSlice';
import userSlice from './userSlice';
import usersSlice from './usersSlice';

export default configureStore({
    reducer: {
        auth: authSlice,
        users: usersSlice,
        user: userSlice,
        products: productsSlice,
    }
});