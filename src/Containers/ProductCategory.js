import React from 'react';
import {Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCategoryProductList } from '../Actions/category-actions';

import Product from '../Component/Home/Product';

class ProductCategory extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            productCategoryList : [],
            isLoading: false,
            hasError:false
        }
    }

    componentDidMount(){

        this.props.fetchCategoryProductList();
    }


    render(){
        if(this.props.isLoading){
            return (
                <React.Fragment>
                {
                    <div className="row thumbnail">
                        <div className="col-md-12">
                            <div className='row'>
                                <div className="col-md-12" > <h3> Loading products, please wait...</h3></div>
                            </div>
                        </div> 
                    </div>    
                }
                
            </React.Fragment>
            );
        }

       
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        return(
            <React.Fragment>
                {
                    this.props.productCategoryList.map((productCategory, index) =>
                        <div className="row thumbnail" key={productCategory._id}>
                            <div className="col-md-12">
                                <div className='row category'>
                                    <div className="col-md-3 pull-left" > <h3>{productCategory.name}</h3></div>
                                    <div className="col-md-3 pull-right" >
                                    <Link to={`/${productCategory.slug}`} > <button className="btn btn-primary pull-right">View All</button></Link></div>
                                </div>
                                <div className='row'>
                                    {productCategory.products.map((product,index) =>
                                        <Product key={index+'-'+product._id} product={product} category={productCategory.slug}/>
                                    )}      
                                </div>
                            </div> 
                        </div>    
                    )
                }
                
            </React.Fragment>
          )
      
        
          
    }
}

function mapStateToProps(state){
    //console.log('state', state)
    return {
        productCategoryList: state.categoryProducts.categories,
        isLoading: state.categoryProducts.isLoading,
        hasError: state.categoryProducts.hasError
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({
        fetchCategoryProductList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);