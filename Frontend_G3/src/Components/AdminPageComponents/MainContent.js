import React, {useState, useEffect} from 'react';



import './main.css';
import PageHeader from "./PageHeader";






const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
}

const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
}


function MainContent ({entity,content,columns,fields}) {
const all_items= content;
    const [search, setSearch] = useState('');
    const [items, setItems] = useState(all_items);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(all_items, 5));
        setItems(sliceData(all_items, page, 5));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = items.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setItems(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setItems(sliceData(all_items, new_page, 5));
    }

    const columnsData = columns.map((column,index) => (<th className="text-center">{column}</th>))

    let i = 0;
    const body = (items.length !== 0 ?
            <tbody>

            {items.map((item, index) => (
                <tr key={index}>
                    {fields.map((field,index)=> !item[field].includes('https')?<td className="text-center"><span>{item[field]}</span></td>:<td className="text-center"><img className="rounded-circle" src={item[field]} width="80px" height="80px" alt="{item[field]}"/></td>)}
                </tr>
            ))}
            </tbody>
            : null)

    return(
        <div className='dashboard-content'>
            <PageHeader
                btnText={"New " + entity} />


            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>{entity.toUpperCase()} LIST</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='entity'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    <thead>
                    <tr>{columnsData}</tr>

                    </thead>
                    {body}

                </table>

                {items.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span
                                key={index}
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                    :
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}



export default MainContent;