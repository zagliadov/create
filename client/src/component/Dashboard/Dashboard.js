import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
//>>>>>>>>>>>>>
import { Users } from './Option/Users/Users';
import { AddProduct } from './Option/AddProduct/AddProduct';
import { AllProduct } from './Option/AllProduct/AllProduct';
import { OptionThree } from './Option/OptionThree/OptionThree';
import {User } from './Option/Users/User'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    main: {
        display: 'flex',
    },
    leftLinkPanel: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 0 0 10px',
        alignItems: 'start',
    },
    center: {
        height: '300px'
    },

}));



export const Dashboard = () => {

    const classes = useStyles();
    const { url } = useRouteMatch();







    //********************** */
    //********************** */
    return (
        <Grid container className={classes.root}>

            <Grid item xs={12}>
                <h1>dashpoard</h1>
            </Grid>
            <Grid item xs={12} className={classes.main}>
                <Grid item xs={2} className={classes.leftLinkPanel}>
                    <Link to={`${url}/users`} >All users</Link>
                    <Link to={`${url}/addproduct`} >Add product</Link>
                    <Link to={`${url}/allproduct`} >All product</Link>
                    <Link to={`${url}/optionthree`} >Option 3</Link>
                </Grid>

                <Grid item xs={10} className={classes.center}>

                    <Switch>
                        <Route path={`${url}/users`} component={Users} />
                        <Route path={`${url}/addproduct`} component={AddProduct} />
                        <Route path={`${url}/allproduct`} component={AllProduct} />
                        <Route path={`${url}/optionthree`} component={OptionThree} />
                        <Route path={`${url}/user/:id`} component={User} />
                    </Switch>
                </Grid>
            </Grid>

        </Grid>

    )
}
