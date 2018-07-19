import React from 'react';
import { Link, BrowserRouter as Router} from 'react-router-dom';
class AppSideBar extends React.Component{

    render(){
        return(
            <div className="col-sm-2">
                
                <div className="list-group">
                    <div className="list-group-item">Filters</div>
                    <div className="list-group-item">
                        <h6>CATEGORIES </h6> 
                    </div>    
                    <Link className="list-group-item" to="/home"> Home</Link>
                    <Link className="list-group-item" to="/contact"> Contact</Link>
                </div>
            </div>
        )
    }
}

export default AppSideBar;