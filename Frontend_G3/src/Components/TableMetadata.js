import React from "react";

export default function TableMetadata({table, setProps}) {
    switch (table) {
        case "product":
            setProps({
                entity: 'product',
                linkField: 'http://localhost:8080/api/v1/metadata/Product/variables',
                linkAPI: 'http://localhost:8080/api/v1/products?name=&origin=&category=&start=&end=',
                searchLink: 'hhttp://localhost:8080/api/v1/products?origin=&category=&start=&end=&name=',
                havingAddNew: 1,
            })
            break;

        case "order" :
            setProps({
                entity: 'order',
                linkField: 'http://localhost:8080/api/v1/metadata/Orders/variables',
                linkAPI: 'http://localhost:8080/api/v1/orders',
                searchLink: 'http://localhost:8080/api/v1/orders',
                havingAddNew: 0,
            })
            break;
        case "user":
            setProps({
                entity: 'product',
                linkField: 'http://localhost:8080/api/v1/metadata/User/variables',
                linkAPI: 'http://localhost:8080/api/v1/products',
                searchLink: 'http://localhost:8080/api/v1/products',
                havingAddNew: 1,
            })
            break;

        case "category" :
            setProps({
                entity: 'order',
                linkField: 'http://localhost:8080/api/v1/metadata/Orders/variables',
                linkAPI: 'http://localhost:8080/api/v1/orders',
                searchLink: 'http://localhost:8080/api/v1/orders',
                havingAddNew: 1,
            })
            break;
        case "rank":
            setProps({
                entity: 'product',
                linkField: 'http://localhost:8080/api/v1/metadata/Product/variables',
                linkAPI: 'http://localhost:8080/api/v1/products',
                searchLink: 'http://localhost:8080/api/v1/products',
                havingAddNew: 1,
            })
            break;
        case "rating" :
            setProps({
                entity: 'order',
                linkField: 'http://localhost:8080/api/v1/metadata/Orders/variables',
                linkAPI: 'http://localhost:8080/api/v1/orders',
                searchLink: 'http://localhost:8080/api/v1/orders',
                havingAddNew: 1,
            })
            break;
        case "supplier":
            setProps({
                entity: 'product',
                linkField: 'http://localhost:8080/api/v1/metadata/Product/variables',
                linkAPI: 'http://localhost:8080/api/v1/products',
                searchLink: 'http://localhost:8080/api/v1/products',
                havingAddNew: 1,
            })
            break;
        default:
            break;
    }
}