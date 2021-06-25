import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SingIn } from './container/SingIn';
import { SignUp } from './container/SignUp';
import { Home } from './container/Home';
import { PageNotFound } from './container/PageNotFound/';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={SingIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/home' component={Home} />
        <Route exact component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
