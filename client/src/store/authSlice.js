import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const registration = createAsyncThunk(
    'user/registration',
    async (data) => {
        try {
            return await axios.post('http://localhost:5000/api/auth/registration', data)
                .then(response => response.data)
                .then(token => {
                    return axios.get('http://localhost:5000/api/private', {
                        headers: {
                            Authorization: `Bearer ${token.token}`
                        }
                    })
                        .then(response => response.data)
                        .then(data => data)
                })
        } catch (error) {
            console.log(error.message)
            return {
                success: false,
            }
        }
    }
)
export const login = createAsyncThunk(
    'user/login',
    async (data) => {
        try {
            return await axios.post('http://localhost:5000/api/auth/login', data)
                .then(response => response.data)
                .then(token => {
                    return axios.get('http://localhost:5000/api/private', {
                        headers: {
                            Authorization: `Bearer ${token.token}`
                        }
                    })
                        .then(response => response.data)
                        .then(data => data)
                })
        } catch (error) {
            console.log(error)
        }

    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        role: 'Not authorized',
        email: null,
        status: null,
        data: null
    },
    reducers: {
        setRole(state, action) {
            state.role = action.payload
        }
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.status = 'loading';
            state.data = 'loading';
            state.role = 'Not authorized';
            state.email = 'loading'
        },
        [login.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.data = payload?.data;
            state.role = payload?.user.roles
            state.email = payload?.user.email
        },//Получены данные
        [login.rejected]: (state, action) => {

        },
        //******************************/
        //*****************************/
        [registration.pending]: (state, action) => {
            state.status = 'loading';
            state.data = 'loading';
            state.role = 'Not authorized';
            state.email = 'loading'
        },
        [registration.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.data = payload.data;
            state.role = payload.user.roles
            state.email = payload.user.email
            state.data = payload.success

        },//Получены данные
        [registration.rejected]: (state, action) => {
        },
    }
})


export const {
    setRole,
} = authSlice.actions;


export default authSlice.reducer;