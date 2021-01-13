import React from  'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './reactComponents/pages/index.js';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
