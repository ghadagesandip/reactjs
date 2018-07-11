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
                    
                    {this.props.children}
                 </React.Fragment>
            
        );
    }
}

export default AppContainer;
