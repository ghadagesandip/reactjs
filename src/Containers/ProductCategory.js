import React from 'react';
import {Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCategoryProducts } from '../Actions/category-products';

import Product from '../Component/Home/Product';

class ProductCategory extends React.Component{


    constructor(props){
        super(props);
        this.state={
            productCategoryList : [ ]
        }
    }

    componentWillMount(){
        fetch('http://localhost:3001/api/category/products?limit=5')
        .then(res=>res.json())
        .then(data=>this.props.setCategoryProducts(data.data))
    }


    render(){
      var pr = {};
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

    return {
        productCategoryList: state.categoryProducts
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({
        setCategoryProducts
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);