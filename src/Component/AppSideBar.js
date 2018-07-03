import React from 'react';
import { Link, BrowserRouter as Router} from 'react-router-dom';
class AppSideBar extends React.Component{

    render(){
        return(
            <div class="col-lg-2">
                <div class="list-group">
                    <Link to="/home"> Home</Link>
                    <Link to="/contact"> Contact</Link>
                </div>
            </div>
        )
    }
}

export default AppSideBar;