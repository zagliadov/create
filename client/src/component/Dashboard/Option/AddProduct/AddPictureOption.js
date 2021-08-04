import React from 'react';
import { Grid } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
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
    firstImage: { width: 'auto', minHeight: '200px', maxHeight: '300px', },
    secondImage: { maxWidth: '100%', minHeight: '200px', maxHeight: '300px', },
    thirdImage: { maxWidth: '100%', minHeight: '200px', maxHeight: '300px', },
    bottomFile: { display: 'flex', },
    first: { display: 'none' }, second: { display: 'none' }, third: { display: 'none' },
}))

export const AddPictureOption = ({product, uploadPicture, removePicture}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

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
        <Grid item xs={6} className={classes.left}>
        <button onClick={() => saveCard()}>Save</button>
        {(product?.picture?.length > 0) ?
            <Grid item xs={12} className={classes.imgParent}>
                <img src={product?.picture[0]} alt={product?.brand} className={classes.firstImage} />
                <button className={classes.removeImg}
                    onClick={() => removeItem(product?.picture[0], product._id)}
                >
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
            </Grid>
            :
            <Grid item xs={12} className={classes.firstFile}>
                <label htmlFor='first'>+</label>
                <input type='file' id="first" className={classes.first}
                    onChange={(e) => fileUpload(e)} />
            </Grid>
        }

        <Grid item xs={12} className={classes.bottomFile}>
            {(product?.picture?.length > 1) ?
                <Grid item xs={6} className={classes.imgParent}>
                    <img src={product?.picture[1]} alt={product?.brand} className={classes.secondImage} />
                    <button className={classes.removeImg}
                        onClick={() => removeItem(product?.picture[1], product._id)}
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </Grid>
                :
                <Grid item xs={6} className={classes.secondFile}>
                    <label htmlFor='second'>+</label>
                    <input type='file' id="second" className={classes.second}
                        onChange={(e) => fileUpload(e)} />
                </Grid>
            }
            {(product?.picture?.length > 2) ?
                <Grid item xs={6} className={classes.imgParent}>
                    <img src={product?.picture[2]} alt={product?.brand} className={classes.thirdImage} />
                    <button className={classes.removeImg}
                        onClick={() => removeItem(product?.picture[2], product._id)}
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </Grid>

                :
                <Grid item xs={6} className={classes.thirdFile}>
                    <label htmlFor='third'>+</label>
                    <input type='file' id="third" className={classes.third}
                        onChange={(e) => fileUpload(e)} />
                </Grid>
            }

        </Grid>
    </Grid>
    );
}

