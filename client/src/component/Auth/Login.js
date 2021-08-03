import React, { useState, useEffect } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/authSlice';
import { useHistory } from 'react-router-dom';
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
    marginTop: theme.spacing(1),
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

export const Login = () => {

  let haveAnAccount = "Don't have an account? Sign Up",
    forgotPassword = "Forgot password?";
  const [types, setTypes] = useState('password');
  const [classname, setClassname] = useState('far fa-eye-slash')
  const [remember, setRemember] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const role = useSelector(state => state.auth.role)
  const email = useSelector(state => state.auth.email)
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    localStorage.setItem('role', role);
    if (role === 'ADMIN' || role === 'USER') history.push('/');
  }, [role, history])

  useEffect(() => {
    localStorage.setItem('email', email)
  }, [email])


  const sendForVerifiaction = (data) => {
    dispatch(login(data))
    localStorage.setItem('remember', remember)

  }

  useEffect(() => {
    if (localStorage.getItem('remember')) {
      let value = localStorage.getItem('remember');
      localStorage.setItem('remember', value)
    }
  }, []);

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
          Login
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(sendForVerifiaction)}>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            {...register('email', { required: true })}
            autoComplete="email"
            autoFocus
          />
          <Grid item className={classes.pass}>
            <TextField
              variant="outlined"
              margin="normal"
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

          <FormControlLabel
            control={<Checkbox value="remember" onChange={(e) => setRemember(e.target.checked)} color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/'>{forgotPassword}</Link>
            </Grid>
            <Grid item>
              <Link to='/registration' className={classes.link}>{haveAnAccount}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}