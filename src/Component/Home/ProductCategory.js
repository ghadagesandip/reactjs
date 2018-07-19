import React from 'react';
import {Link } from 'react-router-dom'
import Product from './Product';

class ProductCategory extends React.Component{


    constructor(props){
        super(props);
        this.state={
            productCategoryList : [ ]
        }
    }

    componentWillMount(){
        fetch('http://localhost:3000/data/productCategoriesData.json')
        .then(res=>res.json())
        .then(data=>this.setState({productCategoryList : data}))
    }


    render(){
      var pr = {};
      return(
        <React.Fragment>
            {
                 this.state.productCategoryList.map((productCategory, index) =>
                    <div className="row thumbnail" key={productCategory.id.toString()}>
                        <div className="col-md-12">
                            <div className='row category'>
                                <div className="col-md-3 pull-left" > <h3>{productCategory.name}</h3></div>
                                <div className="col-md-3 pull-right" >
                                <Link to={`/${productCategory.slug}`} > <button className="btn btn-primary pull-right">View All</button></Link></div>
                            </div>
                            <div className='row'>
                                {productCategory.products.map((product,index) =>
                                    <Product key={index+'-'+product.id} product={product} category={productCategory.slug}/>
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

export default ProductCategory;