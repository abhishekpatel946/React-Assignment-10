import React, { useCallback, useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { firebase, db } from '../../helper/Firebase/firebase';

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
  const register = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        history.push('./home');
      } catch (err) {
        alert(err);
      }

      try {
        db.collection('users').doc(firebase.auth().currentUser.uid).set({
          firstname: firstName,
          lastname: lastName,
          email: email,
          uid: firebase.auth().currentUser.uid,
        });
      } catch (err) {
        alert(err);
      }
    },
    [firstName, lastName, email, password, history]
  );

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
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
                className={classes.submit}
                onClick={register}>
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs className={classes.grid}>
                  <RouteLink to='/'>
                    <span style={{ textDecoration: 'none' }}>
                      Don't have an account? Sign In
                    </span>
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
