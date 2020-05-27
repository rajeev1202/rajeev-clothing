import React from 'react';
import {BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePageComponent';
import ShopPage from './pages/shoppage/shopPageComponent';




function App() {
  return (
    <Router>
    <div>
  <Switch>
    <Route exact path='/' component= {HomePage}/>
    <Route path='/shoppage' component={ShopPage}/>
  </Switch>
  </div>
  </Router>
    )
}

export default App;
