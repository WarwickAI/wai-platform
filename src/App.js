import Amplify, { Auth } from 'aws-amplify';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';

import appSettings from './appSettings';
// ----------------------------------------------------------------------

Amplify.configure(appSettings);

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <Router />
    </ThemeConfig>
  );
}
