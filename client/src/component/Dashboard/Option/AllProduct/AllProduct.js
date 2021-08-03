import { Typography, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../../../store/productsSlice';
import classes from './allProducts.module.sass';
import { Product } from './Product';

export const AllProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);


    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    




    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='h3' className={classes.header} >All products:</Typography>
            </Grid>
            <Product products={products} />
        
        </Grid>
    )
}