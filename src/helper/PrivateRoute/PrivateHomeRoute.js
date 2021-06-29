import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateHomeRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  let userId;
  if (currentUser) {
    userId = currentUser.uid;
  }

  return (
    <Route
      {...(rest.path + userId)}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/'} />
        )
      }
    />
  );
};

export default PrivateHomeRoute;
