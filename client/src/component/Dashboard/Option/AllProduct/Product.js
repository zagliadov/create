import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import classes from './allProducts.module.sass';
import { Link, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, removeProduct } from '../../../../store/productsSlice';
import { EditProduct } from './EditProduct';

export const Product = ({ products }) => {

    const product = useSelector(state => state.products.product);
    const [remove, setRemove] = useState(false);




    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())

    }, [dispatch, product, remove])


    return (
        <Grid container className={classes.body}>
            {products &&
                products.map(product => {
                    return (
                        <Grid item xs={12} key={product._id} className={classes.product}>
                            <Grid item xs={6}>
                                <Link to={`/product/${product._id}`}>{product.product}</Link>
                            </Grid>

                            <Grid item xs={6} className={classes.section__img}>
                                {(product?.picture?.length > 0) ?
                                    <img src={product?.picture[0]} className={classes.img} alt={product.product} />
                                    : null}
                                {(product?.picture?.length > 1) ?
                                    <img src={product?.picture[1]} className={classes.img} alt={product.product} />
                                    : null}
                                {(product?.picture?.length > 2) ?
                                    <img src={product?.picture[2]} className={classes.img} alt={product.product} />
                                    : null}
                                <Switch>
                                    <Route path={`/product/${product._id}`} component={EditProduct} />
                                </Switch>
                            </Grid>
                            <button className={classes.remove}
                                onClick={() => {
                                    setRemove(!remove)
                                    dispatch(removeProduct(product._id))
                                }}
                            >
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            
                        </Grid>
                    )
                })
            }
        </Grid >
    );

}

