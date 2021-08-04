import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const productsCreate = createAsyncThunk(
    'products/productsCreate',
    async (data) => {
        try {
            return await axios.post('http://localhost:5000/api/products/createproducts', data)
                .then(response => response.data)
                .then(data => data)
        } catch (error) {
            console.log(error.message);
        }
    }
)

export const uploadPicture = createAsyncThunk(
    'products/uploadPicture',
    async (data) => {
        let id = data.id;
        let file = data.photo;

        try {
            return await axios.put(`http://localhost:5000/api/products/addpicture`, { file, id })
                .then(response => response.data)
                .then(data => data.updateProduct)
        } catch (error) {
            console.log(error.message);
        }
    }
)

export const removePicture = createAsyncThunk(
    'products/removePicture',
    async (data) => {

        try {
            return await axios.delete('http://localhost:5000/api/products/removepicture', { data })
                .then(response => response.data)
                .then(data => data.updateProduct)
        } catch (error) {
            console.log(error)
        }
    }
)

export const updateElement = createAsyncThunk(
    'products/updateElement',
    async (data) => {
        try {
            return await axios.put('http://localhost:5000/api/products/updateelement', { data })
                .then(response => response.data)
                .then(data => data.updateProduct)

        } catch (error) {
            console.log(error.message);
        }
    }
)

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async () => {
        try {
            return await axios.get('http://localhost:5000/api/products')
                .then(response => response.data)
                .then(data => data.product)
        } catch (error) {
            console.log(error.message)
        }
    }
)
export const getOneProduct = createAsyncThunk(
    'product/getOneProduct',
    async (id) => {
        try {
            return await axios.get(`http://localhost:5000/api/product/${id}`)
                .then(response => response.data)
                .then(data => data.product[0])
        } catch (error) {
            console.log(error.message)
        }
    }
)

export const removeProduct = createAsyncThunk(
    'product/removeProduct',
    async (id) => {
        console.log(id)
        try {
            return await axios.delete(`http://localhost:5000/api/product/remove/${id}`)
                .then(response => response.data)
                .then(data => console.log(data))
        } catch (error) {
            console.log(error.message)
        }
    }
)



const productSlice = createSlice({
    name: 'products',
    initialState: {
        product: [],
        products: [],
        status: null,
    },
    reducers: {
        getProduct(state, action) {
            state.product = action.payload;
        }
    },
    extraReducers: {
        [productsCreate.pending]: (state, action) => {
            state.status = 'loading';
        },
        [productsCreate.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.product = payload;
        },//Получены данные
        [uploadPicture.pending]: (state, action) => {
            state.status = 'loading';
        },
        [uploadPicture.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.product = payload;
        },//Получены данные 
        [removePicture.pending]: (state, action) => {
            state.status = 'loading';
        },
        [removePicture.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.product = payload;
        },//Получены данные 
        [updateElement.pending]: (state, action) => {
            state.status = 'loading';
        },
        [updateElement.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.product = payload;
        },//Получены данные 
        [getAllProducts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getAllProducts.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.products = payload;
        },//Получены данные 
        [getOneProduct.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getOneProduct.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.product = payload;
        },//Получены данные 
        [removeProduct.pending]: (state, action) => {
            state.status = 'loading';
        },
        [removeProduct.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            //state.products = payload;
        },//Получены данные 
    }
})


export const {
    getProduct,
} = productSlice.actions;


export default productSlice.reducer;