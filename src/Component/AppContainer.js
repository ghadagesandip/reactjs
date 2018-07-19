import React from 'react';
import AppSideBar from './AppSideBar';


class AppContainer extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
                <React.Fragment>
                    {this.props.left}
                    <div className="col-sm-10">    
                    {this.props.children}
                    </div>
                 </React.Fragment>
            
        );
    }
}

export default AppContainer;
