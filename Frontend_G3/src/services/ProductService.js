import axios from 'axios';

const PRODUCT_API_BASE_URL = 'http://localhost:8080/api/v1/products';

class ProductService {

    getProduct() {
        let data = axios.get(PRODUCT_API_BASE_URL);
        return data;
    }


    createProduct(product) {
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    getProductById(productId) {
        let dataid = axios.get(PRODUCT_API_BASE_URL + '/' + productId);
        return dataid;
    }

    getProductByDepartmentID(departmentID) {
        return axios.get(PRODUCT_API_BASE_URL + '/departmentID/' + departmentID);
    }

    getProductByDepartmentNameBirthDate(DepartmentName, BirthDate) {
        return axios.get(PRODUCT_API_BASE_URL + '/departmentName/' + DepartmentName + '/' + BirthDate);
    }


    updateProduct(product, productId) {
        return axios.put(PRODUCT_API_BASE_URL + '/' + productId, product);
    }

    deleteProduct(productId) {
        return axios.delete(PRODUCT_API_BASE_URL + '/' + productId);
    }
}

export default new ProductService()