import React from 'react';
 import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Form from './components/Form';
import List from './components/List';
import Card from './components/Card';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <div>
        
          <p><Link to="/login">Log In</Link></p>
          <p><Link to="/friends">Friend List</Link></p>
          <p><Link to="/makefriend">Make A Friend</Link></p>
        <Switch>
          <PrivateRoute path="/friends" component={List} />
          <PrivateRoute path="/makefriend" component={Card} />
          <Route path="/login" component={Form} />
          <Route component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;