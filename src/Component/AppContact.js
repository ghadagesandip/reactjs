import React from 'react';
import AppContainer from './AppContainer';
import AppSideBar from './AppSideBar';


class AppContact extends React.Component{

    render() {
        return (
            <AppContainer left={
                <AppSideBar/>
            }>
                <div className="col-lg-10">
                    contact me at : sangip.ghadge@wwwindia.com
                </div>
            </AppContainer>
        );
    }
}

export default AppContact;
