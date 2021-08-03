import { Grid } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Auth/Login';
import './App.sass';
import { Header } from '../Header/Header';
import Registration from '../Auth/Registration';
import { Dashboard } from '../Dashboard/Dashboard';
import { Profile } from '../Profile/Profile';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { AddPicture } from '../Dashboard/Option/AddProduct/AddPicture';
import { EditProduct } from '../Dashboard/Option/AllProduct/EditProduct';



export const App = () => {



  return (
    <BrowserRouter>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <Header />
        </Grid>
      
      </Grid>

      <Switch>
        <Route path='/' component={Home}  exact/>
        <Route path='/registration' component={Registration} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/profile' component={Profile} />
        <Route path='/shoppingcart' component={ShoppingCart} />
        <Route path='/addpicture' component={AddPicture} />
        <Route path='/product/:id' component={EditProduct} />
      </Switch>

    </BrowserRouter>

  );
}


