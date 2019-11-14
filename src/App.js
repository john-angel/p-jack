import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './navigation/navigationBar';
import Dashboard from  './dashboard/dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar></NavigationBar>
        <Switch>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/' component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
