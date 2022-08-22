import React, {useState} from "react";

export default function TableMetadata({table, setProps}) {
    switch (table) {
        case "product":
            setProps({
                entity: 'product',
                linkField: 'http://localhost:8080/api/v1/metadata/Product/variables',
                linkAPI: 'http://localhost:8080/api/v1/products',
                searchLink: 'http://localhost:8080/api/v1/products',
                havingAddNew: 1,
            })
            break ;

        case "order" :
            setProps({
                entity: 'order',
                linkField: 'http://localhost:8080/api/v1/metadata/Orders/variables',
                linkAPI: 'http://localhost:8080/api/v1/orders',
                searchLink: 'http://localhost:8080/api/v1/orders',
                havingAddNew: 1,
            })
            break;
        default:
            break;
    }
}