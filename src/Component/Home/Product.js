import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class Product extends React.Component{

    constructor(props){ 
        super(props);
        this.state = {
            product : this.props.product,
            category : this.props.category
        }
    }
    render(){
        return(
            <Link to={`${this.state.category}/${this.state.product.brand}`}>
                <div className="col-ms-2 col-md-2 marleft15">
                    <div className="text-center" >
                        <img height="100px" max-width="70px" src={this.state.product.image } data-holder-rendered="true" /> 
                        <div className="caption"> 
                            <h4 className="">{this.state.product.brand}</h4> 
                            <p>{this.state.product.name}</p>
                            <p>Starting from {this.state.product.price}</p>
                        </div>
                    </div> 
                </div> 
            </Link>
        )
    }
}

Product.PropTypes = {
    product : PropTypes.object,
    category : PropTypes.string
}

export default Product;

