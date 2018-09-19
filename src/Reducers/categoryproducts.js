
export default function categoryProductReducer(state = [], {type, payload}){

	switch(type){
	
		case 'LOAD_CATEGORY_PRODUCTS':
			return payload.categoryproducts;
		default:
			return state;	
	}

}