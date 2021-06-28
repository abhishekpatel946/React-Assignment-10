import React from 'react';
import { AuthProvider } from './helper/AuthProvider/AuthProvider';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './helper/PrivateRoute/PrivateRoute';
import { SignIn } from './container/SignIn';
import { SignUp } from './container/SignUp';
import { PageNotFound } from './container/PageNotFound/';
import { PasswordReset } from './container/PasswordReset';
import { Home } from './container/Home';

import './App.scss';

const App = () => {
  return (
    <AuthProvider>
      <div className='App'>
        {/* routes */}
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/password-reset' component={PasswordReset} />
          <PrivateRoute exact path='/home/' component={Home} />
          <Route exact component={PageNotFound} />
        </Switch>
      </div>
    </AuthProvider>
  );
};

export default App;
