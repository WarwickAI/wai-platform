import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const checkAuthentication = async () => {
    try {
      await Auth.currentAuthenticatedUser();
    } catch (err) {
      setAuthenticated(false);
    }
  };

  const [isAuthenticated, setAuthenticated] = useState(true);

  useEffect(() => checkAuthentication(), []);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const withAuthentication =
  (Component) =>
  ({ props }) =>
    (
      <ProtectedRoute>
        <Component {...props} />
      </ProtectedRoute>
    );

export default withAuthentication;
