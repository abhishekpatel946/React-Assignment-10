import React, { Suspense } from 'react';
import { AuthProvider } from './helper/AuthProvider/AuthProvider';
import { Switch, Route } from 'react-router-dom';
import { SignIn } from './container/SignIn';
import { SignUp } from './container/SignUp';
import { PageNotFound } from './container/PageNotFound/';
import { PasswordReset } from './container/PasswordReset';
import { Home } from './container/Home';
import Spinner from 'react-spinner-material';
import './App.scss';

const PrivateRoute = React.lazy(() =>
  import('./helper/PrivateRoute/PrivateRoute')
);

const App = () => {
  return (
    <AuthProvider>
      <div className='App'>
        {/* routes */}
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/password-reset' component={PasswordReset} />
          <Suspense
            fallback={
              <div>
                <Spinner
                  size={120}
                  spinnerColor={'#F50057'}
                  spinnerWidth={2}
                  visible={true}
                />
              </div>
            }>
            <PrivateRoute exact path='/home/' component={Home} />
          </Suspense>
          <Route exact component={PageNotFound} />
        </Switch>
      </div>
    </AuthProvider>
  );
};

export default App;
