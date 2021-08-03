import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { findUser, photoUpload } from '../../store/userSlice';
import { useForm } from 'react-hook-form';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    minHeight: '300px',
    maxHeight: '400px',
  },
  img: {
    height: '100px',
    width: '100px',
  },
  file: {
    fontSize: '24px',
    width: '24px',
    height: '30.1px',
    position: 'absolute',

  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '150px',
    padding: '5px',
  },
  submit: {
    width: '150px',
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    textAlign: 'end',
  },
  error: {
    color: 'red',
    fontSize: '24px'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    
}
});

export const Profile = () => {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(findUser(localStorage.getItem('email')))

  }, [dispatch]);





  const onSubmit = (e, email) => {
    e.preventDefault()
    let file = e.target[0].files[0]
    if (!file) {
      if (!e.target[0].classList.contains(`${classes.error}`)) {
        e.target[0].className += ` ${classes.error}`
      }
      console.log(e.target[0].className)

      setTimeout(() => {
        e.target[0].className = `${classes.file} fa fa-picture-o`
        console.log(e.target[0].className)
      }, 1000)
      return
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      let photo = reader.result;
      dispatch(photoUpload({ photo, email }))
    }
  }





  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.card}>
        <img className={classes.media} src={`${user?.profilePhoto }`} alt={user.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.firstname} {user.lastname}
          </Typography>
          <p>Регистрация: {user.registrationDate}</p>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <form onSubmit={(e) => handleSubmit(onSubmit(e, user.email))} className={classes.form}>
          <input type='file'
            className={`${classes.file} fa fa-picture-o`}
            color='primary'
            {...register('file')} />
          <input type='submit' className={classes.submit} value='Добавить фото' />
        </form>


        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      
      
    </Card>
  );
}

