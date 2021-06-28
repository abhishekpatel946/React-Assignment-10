import React, { useCallback, useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import firebaseConfig, { db } from '../../helper/Firebase/firebaseConfig';
import firebase from 'firebase/app';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(18),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  grid: {
    marginTop: theme.spacing(3),
  },
  submit: {
    marginTop: theme.spacing(2),
  },
}));

const SignIn = ({ history }) => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // regiter with firebase
  const register = useCallback(async (event) => {
    event.preventDefault();
    try {
      await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(firebase.auth().currentUser.uid);
      try {
        db.collection('users')
          .doc(firebase.auth().currentUser.uid)
          .update({
            firstname: firstName,
            lastname: lastName,
            email: email,
            uid: firebase.auth().currentUser.uid,
          })
          .doc('reminders');
      } catch (err) {
        alert(err);
      }
      history.push('./home');
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <div>
      <div>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign Up
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='firstname'
                label='First Name'
                name='firstname'
                autoComplete='firstname'
                autoFocus
                onChange={(event) => setFirstName(event.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='lastname'
                label='Last Name'
                name='lastname'
                autoComplete='lastname'
                onChange={(event) => setLastName(event.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button
                type={'submit'}
                variant={'contained'}
                color={'primary'}
                fullWidth={'fullWidth'}
                className={classes.submit}
                onClick={register}>
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs className={classes.grid}>
                  <RouteLink to='/password-reset'>
                    <Link href='#' variant='body2'>
                      Forgot password?
                    </Link>
                  </RouteLink>
                </Grid>
                <Grid item className={classes.grid}>
                  <RouteLink to='/'>
                    <Link href='#' variant='body2'>
                      Don't have an account? Sign In
                    </Link>
                  </RouteLink>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
