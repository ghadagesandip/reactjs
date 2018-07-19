import React from 'react'
import {Link } from 'react-router-dom';

class AppHeader extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-inverse header navbar-fixed-top ">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Project name</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <form className="navbar-form navbar-left ">
                            <div className="form-group">
                                <input type="text" placeholder="Search" className="form-control col-md-6" />
                            </div>
                            <button type="submit" className="btn btn-success">Search</button>
                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                            &nbsp;
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Login & Signup</a></li>
                            <li><Link to="/cart"> Cart</Link></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default AppHeader;