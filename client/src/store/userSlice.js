import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const getUser = createAsyncThunk(
    'user/getUser',
    async (id) => {
        try {
            return await axios.post(`http://localhost:5000/api/user`, {id})
                .then(response => response.data)
                .then(data => data.user)

        } catch (error) {
            console.log(error.message)
        }
    }
)
export const removeUser = createAsyncThunk(
    'user/removeUser',
    async (id) => {
        try {
            return await axios.post(`http://localhost:5000/api/user/remove`, {id})

        } catch (error) {
            console.log(error.message)
        }
    }
)

export const findUser = createAsyncThunk(
    'user/findUser',
    async (email) => {
        try {
            return await axios.post(`http://localhost:5000/api/user/find`, {email})
                .then(response => response.data)
                .then(data => data.user)

        } catch (error) {
            console.log(error.message)
        }
    }
)

export const photoUpload = createAsyncThunk(
    'user/photoUpload', 
    async (photo, email) => {
        try {
            return await axios.post(`http://localhost:5000/api/user/upload`, {photo, email})
                .then(response => response.data)
                .then(data => data.updateUser)
        } catch (error) {
            console.log(error.message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: 'loading',
        user: [],
    },
    reducers: {
        userRemove(state, action) {
            state.user = [];
        }
    },
    extraReducers: {
        [getUser.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getUser.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.user = payload;
        },
        [getUser.rejected]: (state, action) => {

        },
        //
        [removeUser.pending]: (state, action) => {
            state.status = 'loading';
        },
        [removeUser.fulfilled]: (state, { payload }) => {
            state.status = 'removed';
            // state.user = [];
        },
        [removeUser.rejected]: (state, action) => {

        },
        //////
        [findUser.pending]: (state, action) => {
            state.status = 'loading';
        },
        [findUser.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
             state.user = payload;
        },
        [findUser.rejected]: (state, action) => {

        },
        ///////////
        [photoUpload.pending]: (state, action) => {
            state.status = 'loading';
        },
        [photoUpload.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
             state.user = payload;
        },
        [photoUpload.rejected]: (state, action) => {

        },
    }
});


export const { 
    userRemove,
} = userSlice.actions



export default userSlice.reducer;