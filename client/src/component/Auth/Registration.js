import React, { useEffect, useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { registration } from '../../store/authSlice';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    pass: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    passShowIcon: {
        position: 'absolute',
        right: '20px',
        cursor: 'pointer'
    }

}));

export default function Registration() {
    const dispatch = useDispatch();
    const role = useSelector(state => state.auth.role);
    const [types, setTypes] = useState('password');
    const [classname, setClassname] = useState('far fa-eye-slash')
    const history = useHistory();
    const classes = useStyles();
    const { register, handleSubmit, reset } = useForm();
    const success = useSelector(state => state.auth.data)

    const onSubmit = (data) => {
        dispatch(registration(data))
        localStorage.setItem('email', data.email)
        reset(data)
    };
    // Not authorized
    useEffect(() => {
        localStorage.setItem('role', role);
        if (role === 'ADMIN' || role === 'USER') history.push('/');
    }, [role, history]);

    const showPassword = () => {
        if (types === 'password') {
            setTypes('text');
            setClassname('far fa-eye');
        }
        if (types === 'text') {
            setTypes('password');
            setClassname('far fa-eye-slash');
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registration
                </Typography>
                <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                {...register('firstname', { required: true })}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                {...register('lastname', { required: true })}
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                {...register('email', { required: true })}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item className={classes.pass}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={types}
                                    id="password"
                                    className={classes.passText}
                                    {...register('password', { required: true })}
                                    autoComplete="current-password"
                                />
                                <i className={`${classname} ${classes.passShowIcon}`}
                                    onClick={() => showPassword()}>

                                </i>
                            </Grid>


                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/login">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                {(success === false) ? <h4>Пользователь с таким email уже зерегистрирован</h4> : null}
            </div>
        </Container>
    );
}