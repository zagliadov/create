import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const getUsers = createAsyncThunk(
    'user/getUsers',
    async () => {
        try {
            return await axios.get('http://localhost:5000/api/users')
                .then(response => response.data)
                .then(data => data.users)

        } catch (error) {
            console.log(error.message)
        }
    }
)



const usersSlice = createSlice({
    name: 'users',
    initialState: {
        status: 'loading',
        users: [],
    },
    reducers: {

    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getUsers.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.users = payload;
        },
        [getUsers.rejected]: (state, action) => {

        },
    }
});







// export const {

// } = usersSlice.actions;

export default usersSlice.reducer;