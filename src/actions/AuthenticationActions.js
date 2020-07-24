import {
  AUTHENTICATION_STATUS,
  LOGIN,
  LOGOUT,
} from '../constants/AuthenticationActionType';

import AuthenticationService from '../services/AuthenticationService';

const signInWithGoogle = (provider, dispatch) => {
  dispatch({
    type: AUTHENTICATION_STATUS,
    status: 'PENDING',
  });
  AuthenticationService.signInWithGoogle(provider)
    .then((data) => {
      dispatch({
        type: LOGIN,
        value: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: AUTHENTICATION_STATUS,
        status: 'ERROR',
      });
    });
};

const createWithEmail = (email, password) => {
  return AuthenticationService.createWithEmailAndPassword(email, password);
};

const signInWithEmail = (email, password, dispatch) => {
  dispatch({
    type: AUTHENTICATION_STATUS,
    status: 'PENDING',
  });
  AuthenticationService.signInWithEmail(email, password)
    .then((data) => {
      dispatch({
        type: LOGIN,
        value: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: AUTHENTICATION_STATUS,
        status: 'ERROR',
        message: error.message,
      });
    });
};

const logout = (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

const AuthenticationActions = {
  signInWithGoogle,
  createWithEmail,
  signInWithEmail,
  logout,
};

export default AuthenticationActions;
