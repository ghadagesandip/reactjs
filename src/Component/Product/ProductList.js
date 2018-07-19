import React from 'react';
import AppContainer from '../AppContainer';
import AppSideBar from '../AppSideBar';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


class ProductList extends React.Component{

    constructor(props){

        super(props);
        console.log('props', props)
    }

    render(){
        return (
            <AppContainer left={
                <AppSideBar/>
            }>
                <div className="col-lg-10 thumbnail">
                    <div className="row">
                        <div className="col-md-12">
                            <ol class="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Library</a></li>
                                <li class="active">Data</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p> {this.props.match.params.brand} Redmi Note 5 4gb Mobiles(Showing 1 – 4 products of 4 products)</p>
                        </div>
                        <hr/>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <p>Sort by : Popularity Price -- Low to High Price -- High to Low Newest First </p>
                        </div>
                    </div>

                     <div className="row">
                        <hr/>
                        <div className="col-md-3  text-center">
                            <img src="https://rukminim1.flixcart.com/image/312/312/jdkjzww0/mobile/u/y/j/redmi-note-5-mzb5916in-original-imaf2gabuvmuhvrz.jpeg?q=70" />
                        </div>
                        <div className="col-md-5 text-left">
                            <h3> <Link to="/123" >Mi note 5 </Link> </h3>  
                            <p> 22,232 reviews and 43,679 ratings </p>  
                            <ul>
                                <li> 4 Gb Ram, 64 GB Rom </li>
                                <li> 5.59 inch full screen </li>
                                <li>12 MP Rear camera | 5 MP Front Camera </li>
                                <li> 4000 mAmp Battery </li>
                                <li> 4 Gb Ram, 64 GB Rom </li>
                            </ul>
                        </div>

                        <div className="col-md-4 text-left">
                            <h3> <Link to="/123" > $ 28,556 </Link> </h3>  
                            <p> upto 10,000 of on exchange </p> 
                            <p> emi starting from 3,289</p>  
                            <br/>
                            <p> Offers</p>
                            <ul>
                                <li> No cost emi </li>
                            </ul>
                        </div>
                        
                    </div>

                     <div className="row">
                        <hr/>
                        <div className="col-md-3  text-center">
                            <img src="https://rukminim1.flixcart.com/image/312/312/jdkjzww0/mobile/u/y/j/redmi-note-5-mzb5916in-original-imaf2gabuvmuhvrz.jpeg?q=70" />
                        </div>
                        <div className="col-md-5 text-left">
                            <h3> <Link to="/123" >Mi note 5 </Link> </h3>  
                            <p> 22,232 reviews and 43,679 ratings </p>  
                            <ul>
                                <li> 4 Gb Ram, 64 GB Rom </li>
                                <li> 5.59 inch full screen </li>
                                <li>12 MP Rear camera | 5 MP Front Camera </li>
                                <li> 4000 mAmp Battery </li>
                                <li> 4 Gb Ram, 64 GB Rom </li>
                            </ul>
                        </div>

                        <div className="col-md-4 text-left">
                            <h3> <Link to="/123" > $ 28,556 </Link> </h3>  
                            <p> upto 10,000 of on exchange </p> 
                            <p> emi starting from 3,289</p>  
                            <br/>
                            <p> Offers</p>
                            <ul>
                                <li> No cost emi </li>
                            </ul>
                        </div>
                        
                    </div>

                </div>
            </AppContainer>
        )
    }
}

export default ProductList;

ProductList.PropTypes ={
    
}