import {
  AUTHENTICATION_STATUS,
  LOGIN,
  LOGOUT,
} from '../constants/AuthenticationActionType';

import initialState from '../store/initialState';

const authenticationReducer = (state, action) => {
  //create copy of old state
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case AUTHENTICATION_STATUS:
      newState.status = action.status;
      newState.message = action.message;
      return newState;

    case LOGIN:
      newState = action.value;
      return newState;

    case LOGOUT:
      newState = initialState.profile;
      return newState;

    default:
      return state;
  }
};

export default authenticationReducer;
