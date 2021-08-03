import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import classes from './allProducts.module.sass';
import { Link, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../../store/productsSlice';
import { EditProduct } from './EditProduct';

export const Product = ({ products }) => {

    const product = useSelector(state => state.products.product);

    // const [productName, setProductName] = useState('');
    // const [productNameOpen, setProductNameOpen] = useState(false);

    // const [brandName, setBrandName] = useState('');
    // const [brandOpen, setBrandOpen] = useState(false);

    // const [newAge, setNewAge] = useState('');
    // const [ageOpen, setAgeOpen] = useState('');

    // const [newBreedSize, setNewBreedSize] = useState('');
    // const [breedSizeOpen, setBreedSizeOpen] = useState(false);

    // const [newComponents, setNewComponents] = useState('');
    // const [componentsOpen, setComponentsOpen] = useState(false);

    // const [newContent, setNewContent] = useState('');
    // const [contentOpen, setContentOpen] = useState(false);

    // const [newEnergyValue, setNewEnergyValue] = useState('');
    // const [energyValueOpen, setEnergyValueOpen] = useState(false);

    // const [newCountry, setNewCountry] = useState('');
    // const [countryOpen, setCountryOpen] = useState(false);

    // const [newFeedtype, setNewFeedtype] = useState('');
    // const [feedtypeOpen, setFeedtypeOpen] = useState(false);

    // const [newPettype, setNewPettype] = useState('');
    // const [pettypeOpen, setPettypeOpen] = useState(false);

    // const [newSupplements, setNewSupplements] = useState('');
    // const [supplementsOpen, setSupplementsOpen] = useState(false);

    // const [newWeight, setNewWeight] = useState('');
    // const [weightOpen, setWeightOpen] = useState(false);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())

    }, [dispatch, product])



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
                        </Grid>
                    )
                })
            }
        </Grid >
    );

}

