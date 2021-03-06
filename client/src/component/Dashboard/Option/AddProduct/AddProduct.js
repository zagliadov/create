import React from 'react';
import { makeStyles, Typography, TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { productsCreate } from '../../../../store/productsSlice';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    headers: {
        paddingTop: '20px',
        borderBottom: '1px solid silver',
    },
    fileContainer: {
        border: '1px solid black'
    },
    file: {
        fontSize: '24px',
        width: '24px',
        height: '30.1px',
        position: 'absolute',
        top: '0',

        cursor: 'pointer',

    },
    fildName: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '20px',
        boxSizing: 'border-box',
    },
    inputItem: {

    },
    pictureChoice: {
        display: 'flex',
        paddingTop: '20px',
        border: '1px solid black',
        height: '300px',
        position: 'relative',
    }


}));

export const AddProduct = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const onSubmit = (data, e) => {
        dispatch(productsCreate(data));
        history.push(`/addpicture`);
        localStorage.removeItem('product')
    };

    return (
        <Grid item className={classes.root}>
            <Typography variant='h2' >Add Product</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item xs={12} lg={6}>
                    <Grid item xs={10}>
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Product name"
                            name="product"
                            {...register('product', { required: true })}
                            autoComplete="product"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant='h5' className={classes.headers}>
                            ?????????????????????????????? ????????????:
                        </Typography>
                        <Grid item xs={10} className={classes.fildName}>
                            <Grid item xs={4} >
                                <Typography variant='subtitle1' className={classes.label}>
                                    ??????????:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    className={classes.inputItem}
                                    margin="normal"
                                    fullWidth
                                    label="Brit Premium"
                                    name="brand"
                                    {...register('brand', { required: true })}
                                    autoComplete="brand"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={10} className={classes.fildName}>
                            <Grid item xs={4} >
                                <Typography variant='subtitle1' className={classes.label}>
                                    ???????????? ??????????????????????????:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    className={classes.inputItem}
                                    margin="normal"
                                    fullWidth
                                    label="??????????..."
                                    name="country"
                                    {...register('country', { required: true })}
                                    autoComplete="country"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={10} className={classes.fildName}>
                            <Grid item xs={4} >
                                <Typography variant='subtitle1' className={classes.label}>
                                    ?????? ??????????????:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    className={classes.inputItem}
                                    margin="normal"
                                    fullWidth
                                    label="????????????..."
                                    name="pettype"
                                    {...register('pettype', { required: true })}
                                    autoComplete="petype"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={10} className={classes.fildName}>
                            <Grid item xs={4} >
                                <Typography variant='subtitle1' className={classes.label}>
                                    ????????????/????????????:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    className={classes.inputItem}
                                    margin="normal"
                                    fullWidth
                                    label="?????? ?????????????? ??????????..."
                                    name="breedsize"
                                    {...register('breedsize', { required: true })}
                                    autoComplete="breedsize"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={10} className={classes.fildName}>
                            <Grid item xs={4} >
                                <Typography variant='subtitle1' className={classes.label}>
                                    ??????????????:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    className={classes.inputItem}
                                    margin="normal"
                                    fullWidth
                                    id="product"
                                    label="?????? ???????? ??????????????????..."
                                    name="age"
                                    {...register('age', { required: true })}
                                    autoComplete="age"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={10} className={classes.fildName}>
                            <Grid item xs={4} >
                                <Typography variant='subtitle1' className={classes.label}>
                                    ?????? ??????????:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    className={classes.inputItem}
                                    margin="normal"
                                    fullWidth
                                    label="??????????.."
                                    name="feedtype"
                                    {...register('feedtype', { required: true })}
                                    autoComplete="feedtype"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={10} className={classes.fildName}>
                            <Grid item xs={4} >
                                <Typography variant='subtitle1' className={classes.label}>
                                    ??????:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    className={classes.inputItem}
                                    margin="normal"
                                    fullWidth
                                    label="10????.."
                                    name="weight"
                                    {...register('weight', { required: true })}
                                    autoComplete="weight"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>

                        <Typography variant='h5' className={classes.headers}>
                            ???????????????? ????????????:
                        </Typography>
                        <Grid item xs={10} className={classes.fildName}>
                            <Grid item xs={4} >
                                <Typography variant='subtitle1' className={classes.label}>
                                    ????????????:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    className={classes.inputItem}
                                    margin="normal"
                                    fullWidth
                                    label="???????? ???? ???????? ???????????? (40 %), ??????, ????????????????, ??????????????..."
                                    name="content"
                                    {...register('content', { required: true })}
                                    autoComplete="content"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={10} className={classes.fildName}>
                            <Grid item xs={4} >
                                <Typography variant='subtitle1' className={classes.label}>
                                    ?????????????????????????? ????????????????????????:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    className={classes.inputItem}
                                    margin="normal"
                                    fullWidth
                                    label="?????????? ?????????????? 26%, ?????????? ?????? 14%..."
                                    name="components"
                                    {...register('components', { required: true })}
                                    autoComplete="components"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>

                        <Grid item xs={10} className={classes.fildName}>
                            <Grid item xs={4} >
                                <Typography variant='subtitle1' className={classes.label}>
                                    ???????????????????????????? ????????????????:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    className={classes.inputItem}
                                    margin="normal"
                                    fullWidth
                                    label="4144 ????????/????..."
                                    name="energyvalue"
                                    {...register('energyvalue', { required: true })}
                                    autoComplete="energyvalue"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>

                        <Grid item xs={10} className={classes.fildName}>
                            <Grid item xs={4} >
                                <Typography variant='subtitle1' className={classes.label}>
                                    ?????????????? ??????????????:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    className={classes.inputItem}
                                    margin="normal"
                                    fullWidth
                                    label="?????????????? A 15000 ????, ?????????????? D3 1500 ????..."
                                    name="supplements"
                                    {...register('supplements', { required: true })}
                                    autoComplete="supplements"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>





                    </Grid>
                </Grid>


                <input type='submit' value='???????????????? ??????' />
            </form>
        </Grid>

    )
}
