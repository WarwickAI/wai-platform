import awsconfig from './aws-exports';

const appSettings = {
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    redirectSignIn:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/dashboard'
        : process.env.REACT_APP_REDIRECT_SIGN_IN,
    redirectSignOut:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : process.env.REACT_APP_REDIRECT_SIGN_OUT
  }
};

export default appSettings;
