import React from 'react';
import AppSideBar from './AppSideBar';


class AppContainer extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
                <div className="row">
                    {this.props.left}
                    {this.props.children}
                </div>
            
        );
    }
}

export default AppContainer;
