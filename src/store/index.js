import React from 'react';

import { createBrowserHistory } from 'history';
import * as firebase from 'firebase';

import initialState from './initialState';
import rootReducers from '../reducers';

const history = createBrowserHistory();

var firebaseConfig = {
  apiKey: 'AIzaSyApLYsR5WGviwKkMdtHJINlrDLyeK3OtRY',
  authDomain: 'game-36a74.firebaseapp.com',
  databaseURL: 'https://game-36a74.firebaseio.com',
  projectId: 'game-36a74',
  storageBucket: 'game-36a74.appspot.com',
  messagingSenderId: '933382632470',
  appId: '1:933382632470:web:d3652c5ba77f080ee8b137',
  measurementId: 'G-RCDFTKBHRN',
};

const configureFirebase = () => {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};

const ProfileContext = React.createContext();

const AppProvider = (props) => {
  const { children } = props;

  const [profile, profileDispatch] = React.useReducer(
    rootReducers.profile,
    initialState.profile
  );

  const profileStore = React.useMemo(() => ({ profile, profileDispatch }), [
    profile,
    profileDispatch,
  ]);

  return (
    <ProfileContext.Provider value={profileStore}>
      {children}
    </ProfileContext.Provider>
  );
};

export { history, configureFirebase, AppProvider, ProfileContext };
