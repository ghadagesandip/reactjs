import apiFactory from './api';

export const requestCategoryProducts = () => {
    return apiFactory().get('/category/products?limit=5');
}


