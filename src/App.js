import Amplify, { Auth, Hub } from 'aws-amplify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';

import appSettings from './appSettings';

import store from './stores/store';
import { setAuthDetails } from './stores/authSlice';

// ----------------------------------------------------------------------

console.log(appSettings);
console.log(process.env.NODE_ENV);

Amplify.configure(appSettings);

const onAuthEvent = (data) => {
  const { payload } = data;

  if (payload.event === 'signIn') {
    Auth.currentAuthenticatedUser().then((user) => store.dispatch(setAuthDetails(user.attributes)));
  }
};

Hub.listen('auth', onAuthEvent);

export default function App() {
  return (
    <Provider store={store}>
      <ThemeConfig>
        <ScrollToTop />
        <Router />
      </ThemeConfig>
    </Provider>
  );
}
