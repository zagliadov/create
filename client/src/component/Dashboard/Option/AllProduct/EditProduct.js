import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import classes from './allProducts.module.sass';
import { uploadPicture, removePicture } from '../../../../store/productsSlice';
import { Box } from '../AddProduct/Box';
import { getOneProduct } from '../../../../store/productsSlice';
import { updateElement } from '../../../../store/productsSlice';
import { AddPictureOption } from '../AddProduct/AddPictureOption';



export const EditProduct = () => {
    const dispatch = useDispatch();
    const id = useParams().id;
    const product = useSelector(state => state.products.product);

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

    useEffect(() => {
        dispatch(getOneProduct(id))
    }, [dispatch, id])

    useEffect(() => {
        if (product.length !== 0) console.log(product)
    }, [product])
    return (
        <div>
            <h1>Elem</h1>
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

        <AddPictureOption product={product} uploadPicture={uploadPicture} removePicture={removePicture} />
        </div>
    );
}

