import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link as RouteLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import firebaseConfig from '../../helper/Firebase/firebaseConfig';

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PasswordReset = () => {
  const classes = useStyles();

  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const sendResetEmail = (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;

    firebaseConfig
      .auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        setEmailHasBeenSent(true);
      })
      .catch(function (err) {
        setError(true);
      });
  };

  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Reset Password
          </Typography>
          {/* use snakbar here for success or failure msg */}
          {emailHasBeenSent && <div>An email has been sent to you!</div>}
          {error !== null && <div>{error}</div>}
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
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              onClick={sendResetEmail}
              className={classes.submit}>
              Reset Password
            </Button>
            <Grid container>
              <Grid item>
                <RouteLink to='/'>
                  <Link href='#' variant='body2'>
                    {'Back to Sign In page'}
                  </Link>
                </RouteLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default PasswordReset;
