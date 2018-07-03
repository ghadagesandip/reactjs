import React from 'react';
import AppContainer from './AppContainer';
import AppSideBar from './AppSideBar';


class AppHome extends React.Component{

    render() {
        return (
            <AppContainer left={
                <AppSideBar/>
            }>
                <div className="col-lg-10">
                    Home
                </div>
            </AppContainer>
        );
    }
}

export default AppHome;
