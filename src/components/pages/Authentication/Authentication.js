import React, { useState } from 'react';

import * as firebase from 'firebase';

import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockTwoTone from '@material-ui/icons/LockTwoTone';
import {
  Avatar,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
} from '@material-ui/core';

import LogoImg from '../../../assets/images/logo.jpg';

import { ProfileContext } from '../../../store';

import AuthenticationActions from '../../../actions/AuthenticationActions';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: '#800080',
    height: '100vh',
  },
  avatar: {
    margin: '200px 0px 20px 0px',
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  header: {
    color: '#FFFF00',
    marginBottom: '40px',
  },
  emailInput: {
    display: 'flex',
    borderRadius: '25px',
    background: 'white',
    marginBottom: '10px',
    padding: '8px 40px 8px 16px',
  },
  passwordInput: {
    display: 'flex',
    borderRadius: '25px',
    background: 'white',
    marginBottom: '10px',
    padding: '8px 16px 8px 16px',
  },
  button1: {
    margin: '10px 0px 10px 0px',
    backgroundColor: '#343232',
    width: '140px',
    height: '48px',
    padding: '8px 16px 8px 16px',
    borderRadius: '25px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#009688',
    },
  },
  button2: {
    backgroundColor: '#343232',
    width: '260px',
    height: '48px',
    padding: '8px 16px 8px 16px',
    borderRadius: '25px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#009688',
    },
  },
}));

const Authentication = (props) => {
  const { profile, profileDispatch } = React.useContext(ProfileContext);

  const [values, setValues] = useState({ email: '', password: '' });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const classes = useStyles();
  var provider = new firebase.auth.GoogleAuthProvider();

  React.useEffect(() => {
    // console.log('useEffect');
    if (profile.status === 'ERROR') {
      setValues({ email: '', password: '' });
    }
  }, [profile.status]);
  // console.log('Authentication');

  return (
    <Grid
      className={classes.background}
      container
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Avatar className={classes.avatar} src={LogoImg} />
      </Grid>
      <Grid item>
        <Typography className={classes.header} variant="h4">
          Games
        </Typography>
      </Grid>

      <Grid item>
        <TextField
          className={classes.emailInput}
          placeholder="Email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      </Grid>

      <Grid item>
        <TextField
          className={classes.passwordInput}
          type={passwordShown ? 'text' : 'password'}
          placeholder="Password"
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockTwoTone />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" onClick={togglePasswordVisiblity}>
                {passwordShown ? <Visibility /> : <VisibilityOff />}
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      </Grid>
      <Typography color="Error" variant="h6">
        {profile.status === 'ERROR' ? `${profile.message}` : ''}
      </Typography>
      <Grid item>
        <Button
          variant="contained"
          className={classes.button1}
          onClick={() => {
            AuthenticationActions.createWithEmail(
              values.email,
              values.password
            );
          }}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          className={classes.button1}
          onClick={() => {
            AuthenticationActions.signInWithEmail(
              values.email,
              values.password,
              profileDispatch
            );
          }}
        >
          Login
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={classes.button2}
          onClick={() => {
            AuthenticationActions.signInWithGoogle(provider, profileDispatch);
          }}
        >
          {profile.status === 'PENDING' ? (
            <CircularProgress />
          ) : (
            `Login with Google`
          )}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Authentication;

//Using Flask server
// () => {
//   axios
//     .post("http://127.0.0.1:5000/test", values)
//     .then(function (response) {
//       console.log(response);
//     });
// }
