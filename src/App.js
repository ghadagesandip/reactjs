import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import AppContact from './Component/AppContact';
import AppHome from './Component/AppHome';
import AppHeader from './Component/AppHeader';
import AppSideBar from './Component/AppSideBar';
import AppRoot from './Component/AppRoot';


class App extends Component {
  render() {
    return (
      <React.Fragment>
            <AppHeader />
            <div className="container">
                
                   
                      <Switch>
                        <Route exact path="/" component ={AppHome} />
                        <Route exact path="/home" component ={AppHome} />
                        <Route exact path="/contact" component ={AppContact} />
                        <Route exact path="/forgot-password" component ={AppContact} />
                      </Switch>
                  
            </div>
      </React.Fragment>

       
       
      
    
    );
  }
}

export default App;
