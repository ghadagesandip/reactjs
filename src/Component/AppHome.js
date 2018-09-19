import React from 'react';
import AppContainer from './AppContainer';
import AppSideBar from './AppSideBar';
import ProductCategory from './../Containers/ProductCategory';



class AppHome extends React.Component{

    render() {
        return (
            <AppContainer left={<AppSideBar/>}>
                <ProductCategory />
            </AppContainer>
        );
    }
}

export default AppHome;
