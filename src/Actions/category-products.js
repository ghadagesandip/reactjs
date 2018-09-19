export function setCategoryProducts(categoryproducts){

    return {
		type:'LOAD_CATEGORY_PRODUCTS',
		payload: {
			categoryproducts: categoryproducts
		}
    }
    
}