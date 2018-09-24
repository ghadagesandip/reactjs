import {
	FETCH_CATEGORY_PRODUCTS_REQ,
	FETCH_CATEGORY_PRODUCTS_FAILURE,
	FETCH_CATEGORY_PRODUCTS_SUCCESS
} from './../Actions/category-actions';

var intialState = {
	isLoading: false,
	hasError: false,
	categories: []
};

export default function categoryProductReducer(state = intialState, {type, payload} ){

	switch(type){

		case FETCH_CATEGORY_PRODUCTS_REQ:
			
		return {...state, ...payload}
			
	
		case FETCH_CATEGORY_PRODUCTS_FAILURE:
			return {...state, ...payload}
			
		case FETCH_CATEGORY_PRODUCTS_SUCCESS:
			return {...state, ...payload}
			
		default:
			return state;	
	}

}