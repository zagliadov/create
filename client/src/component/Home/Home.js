import { Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findUser } from '../../store/userSlice';
import classes from './home.module.sass';
import { getAllProducts } from '../../store/productsSlice';
import { Card } from './Card';




export const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    useEffect(() => {
        dispatch(findUser(localStorage.getItem('email')))
        dispatch(getAllProducts())
    }, [dispatch])



    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.album}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Album layout
                </Typography>
            </Grid>
            <Grid item xs={12} md={8} lg={10} className={classes.something}>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Something short and leading about the collection below—its contents, the creator, etc.
                    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                    entirely.
                </Typography>
            </Grid>

            <Grid item xs={12} className={classes.card__container}>
                <Card products={products} />
            </Grid>




        </Grid>




    );
}

