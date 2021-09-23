import awsconfig from './aws-exports';

const appSettings = {
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    redirectSignIn: process.env.REACT_APP_REDIRECT_SIGN_IN,
    redirectSignOut: process.env.REACT_APP_REDIRECT_SIGN_OUT
  }
};

export default appSettings;
