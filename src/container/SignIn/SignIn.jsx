import React, { useCallback, useContext, useState } from 'react';
import { Redirect, Link as RouteLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { firebase } from '../../helper/Firebase/firebase';
import { AuthContext } from '../../helper/AuthProvider/AuthProvider';
import { SnackbarMui } from '../Alert';

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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(null);

  // login with firebase
  const login = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        setSuccess(true);
      } catch (err) {
        setSuccess(false);
        alert(err);
      }
    },
    [email, password]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to={'/home'} />;
  }

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
              Sign In
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
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
                onClick={login}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs className={classes.grid}>
                  <RouteLink to='signup'>
                    <span style={{ textDecoration: 'none' }}>
                      Don't have an account? Sign Up
                    </span>
                  </RouteLink>
                </Grid>
                <Grid item className={classes.grid}>
                  <RouteLink to='/password-reset'>
                    <span style={{ textDecoration: 'none' }}>
                      Forgot password?
                    </span>
                  </RouteLink>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        {success ? (
          <SnackbarMui
            msg={'Login successfully..!'}
            severity={'success'}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          />
        ) : (
          <SnackbarMui
            msg={'Login failed..!'}
            severity={'danger'}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          />
        )}
      </div>
    </div>
  );
};

export default SignIn;
