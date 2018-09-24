import axios from 'axios';

const apiFactory = () => {
    const service = axios.create({
        baseURL:'http://localhost:3001/api'
    })
    return service;
};

export default apiFactory;