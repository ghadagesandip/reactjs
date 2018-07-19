import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import AppContact from './Component/AppContact';
import AppHome from './Component/AppHome';
import AppHeader from './Component/AppHeader';
import AppSideBar from './Component/AppSideBar';
import AppRoot from './Component/AppRoot';
import ProductList from './Component/Product/ProductList';
import NotFound from './Component/NotFound';

class App extends Component {
  render() {
    return (
      <React.Fragment>
            <AppHeader />
            <div className="container-fluid content">
                <Switch>
                  <Route exact path="/" component ={AppHome} />
                  <Route exact path="/home" component ={AppHome} />
                  <Route exact path="/contact" component ={AppContact} />
                  <Route exact path="/forgot-password" component ={AppContact} />
                  <Route exact path="/:category/:brand" component ={ProductList} />
                  <Route component={NotFound} />
                </Switch>
            </div>
      </React.Fragment>

       
       
      
    
    );
  }
}

export default App;
