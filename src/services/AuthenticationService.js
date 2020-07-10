import * as firebase from 'firebase';
//Using firebase for google sign in
const signInWithGoogle = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      return true;
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error', errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      return false;
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
const signInWithEmail = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      return console.log('User logged in');
      //return true;
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return console.log('Error', errorMessage);
      //return false;
      // ...
    });
};

const AuthenticationService = {
  signInWithGoogle,
  createWithEmailAndPassword,
  signInWithEmail,
};

export default AuthenticationService;
