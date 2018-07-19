import React from 'react';
import AppContainer from './AppContainer';
import AppSideBar from './AppSideBar';
import { Link } from 'react-router-dom'
import ProductCategory from './Home/ProductCategory';



class AppHome extends React.Component{

    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <AppContainer left={<AppSideBar/>}>
                <ProductCategory />
            </AppContainer>
        );
    }
}

export default AppHome;
