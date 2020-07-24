const parseLoginResponse = (response) => {
  return {
    status: 'LOGGED_IN',
    name: response.user.displayName,
    email: response.user.email,
    phone: response.user.phoneNumber,
    token: response.credential.accessToken,
  };
};

const parseLoginResponseEmail = (response) => {
  return {
    status: 'LOGGED_IN',
    name: response.user.displayName,
    email: response.user.email,
    phone: response.user.phoneNumber,
    token: response.credential,
  };
};

const AuthenticationDataFormatter = {
  parseLoginResponse,
  parseLoginResponseEmail,
};

export default AuthenticationDataFormatter;
