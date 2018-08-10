import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AppContact from './Component/AppContact';
import AppHome from './Component/AppHome';
import AppHeader from './Component/AppHeader';
import ProductList from './Component/Product/ProductList';
import NotFound from './Component/NotFound';
import { updateUser } from './Actions/user-actions';

class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(){
    console.log('cakked');
    this.props.onUpdateUser('Sammy');
  }

  
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
            <div onClick={this.onUpdateUser}>Update User </div>
            {this.props.user}
      </React.Fragment>

       
       
      
    
    );
  }
}
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser : updateUser
}

export default connect(mapStateToProps, mapActionsToProps )(App);
