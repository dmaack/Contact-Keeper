import React, { Fragment } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Home from './components/layout/Home'
import About from './components/layout/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <NavBar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
