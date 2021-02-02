import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './navigation/navigationBar';
import Dashboard from  './dashboard/dashboard';
import Project from './project/project'

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar></NavigationBar>
        <div className='pageGrid'>                  
          <Switch>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Route path='/project/:id' component={Project}></Route>
            <Route exact path='/' component={Dashboard}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
