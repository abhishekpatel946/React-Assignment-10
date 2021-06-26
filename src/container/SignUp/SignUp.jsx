import React, { useCallback, useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { StickyFooter } from '../Footer';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import firebaseConfig from '../../helper/firebase/firebaseConfig';

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

  // regiter with firebase
  const register = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebaseConfig
          .auth()
          .createUserWithEmailAndPassword(email, password);
        history.push('./home');
      } catch (err) {
        alert(err);
      }
    },
    [history, email, password]
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
        <StickyFooter />
      </div>
    </div>
  );
};

export default SignIn;
