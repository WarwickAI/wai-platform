import Amplify, { Auth } from 'aws-amplify';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';

import awsconfig from './aws-exports';
// ----------------------------------------------------------------------

Amplify.configure(awsconfig);

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <Router />
    </ThemeConfig>
  );
}
