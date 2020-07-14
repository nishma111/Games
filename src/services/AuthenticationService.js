import * as firebase from 'firebase';

import { AuthenticationDataFormatter } from '../utils';

//Using firebase for google sign in
const signInWithGoogle = async (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      return AuthenticationDataFormatter.parseLoginResponse(result);
    })
    .catch((error) => {
      throw Error(error);
    });
};

//Using Firebase for sign up
const createWithEmailAndPassword = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      return console.log('User created');
      // return true;
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      return console.log('Error', errorMessage);
      //return false;
    });
};

//Using Firebase for sign in
const signInWithEmail = async (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      return AuthenticationDataFormatter.parseLoginResponseEmail(result);
    })
    .catch((error) => {
      throw Error(error);
    });
};

const AuthenticationService = {
  signInWithGoogle,
  createWithEmailAndPassword,
  signInWithEmail,
};

export default AuthenticationService;
