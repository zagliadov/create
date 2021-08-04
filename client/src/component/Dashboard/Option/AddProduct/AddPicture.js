import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct, removePicture, uploadPicture, updateElement } from '../../../../store/productsSlice';
import { Box } from './Box';
import { useHistory } from 'react-router-dom';
import { AddPictureOption } from './AddPictureOption';

const useStyles = makeStyles(() => ({
    main: { display: 'flex', },
    left: { display: 'flex', flexDirection: 'column', },
    imgParent: { position: 'relative', },
    removeImg: {
        position: 'absolute',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        top: 0,
        left: '10px',
    },
    right: { height: 'auto', },
    firstFile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px dashed blue',
        width: '100%',
        cursor: 'pointer',
        fontSize: '10em',
    },
    secondFile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        border: '1px dashed blue',
        cursor: 'pointer',
        fontSize: '5em',
    },
    thirdFile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        border: '1px dashed blue',
        cursor: 'pointer',
        fontSize: '5em',
    },
    firstImage: { width: '100%', minHeight: '200px', maxHeight: '300px', },
    secondImage: { maxWidth: '100%', minHeight: '200px', maxHeight: '300px', },
    thirdImage: { maxWidth: '100%', minHeight: '200px', maxHeight: '300px', },
    bottomFile: { display: 'flex', },
    first: { display: 'none' }, second: { display: 'none' }, third: { display: 'none' },
    add__picture: {
        display: 'flex',
        border: '1px solid red',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))

export const AddPicture = () => {
    const classes = useStyles();
    const history = useHistory();

    const [productName, setProductName] = useState('');
    const [productNameOpen, setProductNameOpen] = useState(false);

    const [brandName, setBrandName] = useState('');
    const [brandOpen, setBrandOpen] = useState(false);

    const [newAge, setNewAge] = useState('');
    const [ageOpen, setAgeOpen] = useState('');

    const [newBreedSize, setNewBreedSize] = useState('');
    const [breedSizeOpen, setBreedSizeOpen] = useState(false);

    const [newComponents, setNewComponents] = useState('');
    const [componentsOpen, setComponentsOpen] = useState(false);

    const [newContent, setNewContent] = useState('');
    const [contentOpen, setContentOpen] = useState(false);

    const [newEnergyValue, setNewEnergyValue] = useState('');
    const [energyValueOpen, setEnergyValueOpen] = useState(false);

    const [newCountry, setNewCountry] = useState('');
    const [countryOpen, setCountryOpen] = useState(false);

    const [newFeedtype, setNewFeedtype] = useState('');
    const [feedtypeOpen, setFeedtypeOpen] = useState(false);

    const [newPettype, setNewPettype] = useState('');
    const [pettypeOpen, setPettypeOpen] = useState(false);

    const [newSupplements, setNewSupplements] = useState('');
    const [supplementsOpen, setSupplementsOpen] = useState(false);

    const [newWeight, setNewWeight] = useState('');
    const [weightOpen, setWeightOpen] = useState(false);


    const product = useSelector(state => state.products.product)
    const dispatch = useDispatch();



    useEffect(() => {
        if (product.length !== 0) {
            localStorage.setItem('product', JSON.stringify(product))
        }
    }, [product])
    useEffect(() => {
        if (localStorage.getItem('product')) {
            dispatch(getProduct(JSON.parse(localStorage.getItem('product'))))
        }
    }, [dispatch])

    const fileUpload = (e) => {
        const file = e.target.files[0]
        let id = product._id;
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            let photo = reader.result;
            dispatch(uploadPicture({ photo, id }))
        }
    }
    const removeItem = (pic, id) => {
        dispatch(removePicture({ pic, id }))
    }
    const saveCard = () => {
        history.push('/')
    }

    return (
        <Grid item xs={12} className={classes.root}>
            <Typography variant='h2'>Product card</Typography>
            <Grid item xs={12} className={classes.main}>
                <Grid item xs={12} className={classes.right}>
                    {/* ************************************* */}
                    <Box
                        variant='h5'
                        name={'Product name:'}
                        keys={'product'}
                        elem={product?.product}
                        setter={setProductNameOpen}
                        open={productNameOpen}
                        setNew={setProductName}
                        id={product?._id}
                        newElem={productName}
                        dispatch={dispatch}
                        updateElement={updateElement}
                    />
                    {/* ************************************* */}
                    <Box
                        variant={'body1'}
                        name={'Brand name:'}
                        keys={'brand'}
                        elem={product?.brand}
                        setter={setBrandOpen}
                        open={brandOpen}
                        setNew={setBrandName}
                        id={product?._id}
                        newElem={brandName}
                        dispatch={dispatch}
                        updateElement={updateElement}
                    />
                    {/* ********************* */}
                    <Box
                        variant={'body1'}
                        name={'Age:'}
                        keys={'age'}
                        elem={product?.age}
                        setter={setAgeOpen}
                        open={ageOpen}
                        setNew={setNewAge}
                        id={product?._id}
                        newElem={newAge}
                        dispatch={dispatch}
                        updateElement={updateElement}
                    />
                    {/* ********************* */}
                    <Box
                        variant={'body1'}
                        name={'Breed size:'}
                        keys={'breedsize'}
                        elem={product?.breedsize}
                        setter={setBreedSizeOpen}
                        open={breedSizeOpen}
                        setNew={setNewBreedSize}
                        id={product?._id}
                        newElem={newBreedSize}
                        dispatch={dispatch}
                        updateElement={updateElement}
                    />
                    {/* ********************* */}
                    <Box
                        variant={'body1'}
                        name={'Components:'}
                        keys={'components'}
                        elem={product?.components}
                        setter={setComponentsOpen}
                        open={componentsOpen}
                        setNew={setNewComponents}
                        id={product?._id}
                        newElem={newComponents}
                        dispatch={dispatch}
                        updateElement={updateElement}
                    />
                    {/* ********************* */}
                    <Box
                        variant={'body1'}
                        name={'Content:'}
                        keys={'content'}
                        elem={product?.content}
                        setter={setContentOpen}
                        open={contentOpen}
                        setNew={setNewContent}
                        id={product?._id}
                        newElem={newContent}
                        dispatch={dispatch}
                        updateElement={updateElement}
                    />
                    {/* ********************* */}
                    <Box
                        variant={'body1'}
                        name={'Energy value:'}
                        keys={'energyvalue'}
                        elem={product?.energyvalue}
                        setter={setEnergyValueOpen}
                        open={energyValueOpen}
                        setNew={setNewEnergyValue}
                        id={product?._id}
                        newElem={newEnergyValue}
                        dispatch={dispatch}
                        updateElement={updateElement}
                    />
                    {/* ********************* */}
                    <Box
                        variant={'body1'}
                        name={'Country:'}
                        keys={'country'}
                        elem={product?.country}
                        setter={setCountryOpen}
                        open={countryOpen}
                        setNew={setNewCountry}
                        id={product?._id}
                        newElem={newCountry}
                        dispatch={dispatch}
                        updateElement={updateElement}
                    />
                    {/* ********************* */}
                    <Box
                        variant={'body1'}
                        name={'Feed type:'}
                        keys={'feedtype'}
                        elem={product?.feedtype}
                        setter={setFeedtypeOpen}
                        open={feedtypeOpen}
                        setNew={setNewFeedtype}
                        id={product?._id}
                        newElem={newFeedtype}
                        dispatch={dispatch}
                        updateElement={updateElement}
                    />
                    {/* ********************* */}
                    <Box
                        variant={'body1'}
                        name={'Pet type:'}
                        keys={'pettype'}
                        elem={product?.pettype}
                        setter={setPettypeOpen}
                        open={pettypeOpen}
                        setNew={setNewPettype}
                        id={product?._id}
                        newElem={newPettype}
                        dispatch={dispatch}
                        updateElement={updateElement}
                    />
                    {/* ********************* */}
                    <Box
                        variant={'body1'}
                        name={'Supplements:'}
                        keys={'supplements'}
                        elem={product?.supplements}
                        setter={setSupplementsOpen}
                        open={supplementsOpen}
                        setNew={setNewSupplements}
                        id={product?._id}
                        newElem={newSupplements}
                        dispatch={dispatch}
                        updateElement={updateElement}
                    />
                    {/* ********************* */}
                    <Box
                        variant={'body1'}
                        name={'Weight:'}
                        keys={'weight'}
                        elem={product?.weight}
                        setter={setWeightOpen}
                        open={weightOpen}
                        setNew={setNewWeight}
                        id={product?._id}
                        newElem={newWeight}
                        dispatch={dispatch}
                        updateElement={updateElement}
                    />
                </Grid>

            </Grid>
            <Grid item xs={12} className={classes.add__picture}>
                <AddPictureOption product={product} uploadPicture={uploadPicture} removePicture={removePicture} />
            </Grid>

        </Grid>
    );
}

