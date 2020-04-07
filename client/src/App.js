import React, { Fragment } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Home from './components/layout/Home'
import About from './components/layout/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register'
import Login from './components/auth/Login'


const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <NavBar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/register' component={Register}></Route>
                <Route exact path ='/login' component={Login}></Route>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
