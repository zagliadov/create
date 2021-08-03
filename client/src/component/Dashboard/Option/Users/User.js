import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, removeUser } from '../../../../store/userSlice';
import { Card, CardActionArea, CardActions, CardContent, Button, Typography } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        minHeight: '300px',
        maxHeight: '400px',
        width: '100px'
    },
    card: {
        display: 'flex',
        justifyContent: 'center'
    }
});

export const User = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        dispatch(getUser(id))
    }, [dispatch, id]);




    const onRemove = () => {
        dispatch(removeUser(id))
        history.push('/dashboard/users')
    }

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.card}>
                <img className={classes.media} src={`${user?.profilePhoto }`} alt={user.name} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {user.firstname} {user.lastname}
                    </Typography>
                    <p>Зарегистрирован: {user.registrationDate}</p>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => onRemove()}>
                    Remove
                </Button>
            </CardActions>
        </Card>

    )
}