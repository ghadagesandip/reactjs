import {combineReducers} from 'redux';
import  productReducer  from './productReducer';
import userReducer from './userReducer';
import categoryProductReducer from './categoryproducts';

export default  combineReducers({
	categoryProducts: categoryProductReducer
});

