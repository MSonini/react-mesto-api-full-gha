import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ element: Component, loggedIn = false, ...props }) => {
  // console.log('Protected route loggendin:', loggedIn);
  return loggedIn ? <Component {...props} /> : <Navigate to="/sign-in" replace />;
};

export default ProtectedRouteElement;
