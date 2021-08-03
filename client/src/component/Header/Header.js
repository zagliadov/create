import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRole } from '../../store/authSlice';
import { userRemove } from '../../store/userSlice';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '90px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    display: 'flex',
    textDecoration: 'none',
    padding: '5px 10px',
    color: '#eceff1'
  },
  pic: {
    borderRadius: '100%',
    width: '40px',
    height: '40px',
    marginLeft: '10px'
  }
}));

export const Header = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user)
  const role = useSelector(state => state.auth.role)


  useEffect(() => {
    dispatch(setRole(localStorage.getItem('role')))
  }, [dispatch]);




  return (
    <Grid item xs={12} className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Link to='/' className={classes.link}>Home</Link>
          {(role === 'ADMIN' || role === 'USER') ? null :
            <>
              <Link to='/registration' className={classes.link}>Registration</Link>
              <Link to='/login' className={classes.link}>Login</Link>
            </>
          }
          {(role === 'Not authorized') ? null :
            <Link to='/'
              className={classes.link}
              onClick={() => {
                dispatch(userRemove())
                dispatch(setRole('Not authorized'));
                localStorage.setItem('role', 'Not authorized');
                localStorage.removeItem('email');
              }}>Log out
            </Link>
          }
          {(role === 'ADMIN') ?
            <Link to='/dashboard' className={classes.link} >Dashboard</Link>
            : null}
          {(role === "USER") ?
            <Link to='/profile' className={classes.link} >
              {(user?.firstname && user?.profilePhoto) ?
                <img src={user?.profilePhoto}
                  alt={user?.firstname}
                  className={classes.pic} /> : <p> Profile</p>}
            </Link>
            : null}

          {(role === "USER") ?
            <Link to='/shoppingcart' className={classes.link} >
              <i className="fas fa-shopping-cart"></i>
            </Link>
            : null}

        </Toolbar>
      </AppBar>
    </Grid>

  )
}