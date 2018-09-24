
import * as CategoryService from './../Services/category';

export const FETCH_CATEGORY_PRODUCTS_REQ = "FETCH_CATEGORY_PRODUCTS_REQ";
export const FETCH_CATEGORY_PRODUCTS_FAILURE = "FETCH_CATEGORY_PRODUCTS_FAILURE";
export const FETCH_CATEGORY_PRODUCTS_SUCCESS = "FETCH_CATEGORY_PRODUCTS_SUCCESS";


export const fetchCategoryProductList = () => {

	return dispatch => {

		dispatch(requestCategoryProductsStarted(true));
			CategoryService.requestCategoryProducts().then(
				res => dispatch(fetchCategoryProductsSuccess(res.data.data)),
				error => dispatch(fetchCategoryProductsFailed(error))
			)
	
	}
}

export function requestCategoryProductsStarted(bool){
	return {
		type:FETCH_CATEGORY_PRODUCTS_REQ,
		payload:{
			isLoading: bool
		}
	}
}

export function fetchCategoryProductsSuccess(categoryproducts){
	return {
		type: FETCH_CATEGORY_PRODUCTS_SUCCESS,
		payload:{
			categories: categoryproducts,
			isLoading:false
		}
	}
}

export function fetchCategoryProductsFailed(error){
	return {
		type:FETCH_CATEGORY_PRODUCTS_FAILURE,
		payload:{
			hasError:error
		}
	}
}