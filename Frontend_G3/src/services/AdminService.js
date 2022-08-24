import axios from 'axios';

class AdminService {

    fetchTableData (table) {
        let entity = table;
        let columns, data, havingAddNew
        switch (table) {
            case 'products':
                columns = axios.get('http://localhost:8080/api/v1/metadata/Product/variables');
                data = axios.get('http://localhost:8080/api/v1/products')
                havingAddNew = true;
                break;
            case 'order':
                columns = axios.get('http://localhost:8080/api/v1/metadata/Orders/variables');
                data = axios.get('http://localhost:8080/api/v1/orders')
                havingAddNew = false;
                break;
            case 'category':
                columns = axios.get('http://localhost:8080/api/v1/metadata/Category/variables');
                data = axios.get('http://localhost:8080/api/v1/categories')
                havingAddNew = true;
                break;
            case 'ranking':
                columns = axios.get('http://localhost:8080/api/v1/metadata/Ranking/variables');
                data = axios.get('http://localhost:8080/api/v1/rank')
                havingAddNew = true;
                break;
            default:
                return null;
        }
        return [entity, columns, data, havingAddNew]
    }
}

export default new AdminService();

//         const fetchData = async () => {
//             const content = (await AdminService.fetchTableData(table)[1]).data;
//             const columns = (await AdminService.fetchTableData(table)[2]).data;
//             await setContent(content);
//             await setColumns(columns);
//             await setFields(columns);
//             console.log('done!!!', content);
//         }
//
//         useEffect(() => {
//             async function setData(){
//                 await fetchData();
//                 await setItems(sliceData(content, page, 5))
//                 await setPagination(calculateRange(content, 5))
//                 await setLoading(false)
//                 console.log('notDone!!!', content);
//             }
//         }, [props, location.pathname])
//         setData()
//     }
// , [location.pathname,page])