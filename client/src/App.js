import React, { Fragment } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Home from './components/layout/Home'
import About from './components/layout/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts'

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <NavBar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home}></Route>
                  <Route exact path='/about' component={About}></Route>
                  <Route exact path='/register' component={Register}></Route>
                  <Route exact path ='/login' component={Login}></Route>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
