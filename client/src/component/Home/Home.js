import { Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { findUser } from '../../store/userSlice';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    something: {
        display: 'flex',
        justifyContent: 'center',
    }
}))



export const Home = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUser(localStorage.getItem('email')))
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
        </Grid>




    );
}

