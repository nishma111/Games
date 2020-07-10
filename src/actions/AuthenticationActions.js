import AuthenticationService from '../services/AuthenticationService';

const signInWithGoogle = (provider) => {
  return AuthenticationService.signInWithGoogle(provider);
  //console.log(AuthenticationService.signInWithGoogle(provider));
};

const createWithEmail = (email, password) => {
  return AuthenticationService.createWithEmailAndPassword(email, password);
};

const signInWithEmail = (email, password) => {
  return AuthenticationService.signInWithEmail(email, password);
};

const AuthenticationActions = {
  signInWithGoogle,
  createWithEmail,
  signInWithEmail,
};

export default AuthenticationActions;
