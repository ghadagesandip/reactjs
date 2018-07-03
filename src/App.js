import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import AppContact from './Component/AppContact';
import AppHome from './Component/AppHome';
import AppHeader from './Component/AppHeader';
import AppSideBar from './Component/AppSideBar';
import AppRoot from './Component/AppRoot';


class App extends Component {
  render() {
    return (
      
      <div className="container col-lg-12">
                <AppHeader />
                <div className="container">
                    
                        <Router>
                          <Switch>
                            <Route exact path="/" component ={AppHome} />
                            <Route exact path="/home" component ={AppHome} />
                            <Route exact path="/contact" component ={AppContact} />
                          </Switch>
                      </Router>
                        
                    
                </div>
            </div>

       
       
      
    
    );
  }
}

export default App;
