import React from 'react';
import { Link, BrowserRouter as Router} from 'react-router-dom';
class AppSideBar extends React.Component{

    render(){
        return(
            <div class="col-lg-2">
                <div class="list-group">
                    <Link className="list-group-item" to="/home"> Home</Link>
                    <Link className="list-group-item" to="/contact"> Contact</Link>
                </div>
            </div>
        )
    }
}

export default AppSideBar;