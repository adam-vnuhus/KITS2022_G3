import React, {useEffect, useState} from 'react';
import './mainContent.css';
import PageHeader from "./PageHeader";
import {Link} from "react-router-dom";
import AdminEditForm from "./AdminEditForm";

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

function MainContent({entity, content, columns, fields, addNew, linkToEdit, linkToDelete}) {
    const all_items = content;
    const [isShown,setShown] = useState("d-none")

    const [search, setSearch] = useState('');
    const [items, setItems] = useState(all_items);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [selectedItem,setSelectedItem] = useState(null);

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
        } else {
            __handleChangePage(1);
        }
    };

    // Change Page
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setItems(sliceData(all_items, new_page, 5));
    }

    const columnsData = columns.map((column, index) => (<th className="text-center">{column}</th>))

    function editButtonHandler(item) {
        setShown("d-block")
        setSelectedItem(item)
    }
    function hideEditForm() {
        setShown("d-none")
    }

    const body = (items.length !== 0 ?
        <tbody>

        {items.map((item, index) => (
            <>
                <tr key={index}>
                    {fields.map((field, index) =>
                        !item[field].includes('https')
                            ? <td className="text-center">
                                <span>{item[field]}</span>
                            </td>
                            : <td className="text-center">
                                <img className="rounded-circle" src={item[field]} width="80px" height="80px"
                                     alt={item[field]}/>
                            </td>)
                    }
                    <td>
                        <button type="button" className="btn btn-primary" onClick={()=>editButtonHandler(item)}>Edit</button>
                        <Link to={{linkToDelete} + "/" + item[fields[0]]}>"
                            style="text-decoration: none">
                            <button type="button" className="btn btn-danger">Delete</button>
                        </Link>
                    </td>
                </tr>
            </>
        ))}

        </tbody>
        : null)

    return (
        <div className='mainContent_ mainContent_dashboard-content'>
            <PageHeader
                linkToAddNew={linkToAddNew}
                btnText={addNew === 1 ? "New " + entity : null}/>
            <div className='mainContent_dashboard-content-container'>
                <div className='mainContent_dashboard-content-header'>
                    <h2>{entity.toUpperCase()} LIST</h2>
                    <div className='mainContent_dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='mainContent_dashboard-content-input'
                            onChange={e => __handleSearch(e)}/>
                    </div>
                </div>
                <AdminEditForm columns={columns} fields={fields} entity={entity} itemSelected={selectedItem}
                               linkToAPI={linkToEdit} show={isShown}/>
                <table>
                    <thead>
                        <tr>{columnsData}</tr>
                    </thead>
                    {body}
                </table>

                {items.length !== 0 ?
                    <div className='mainContent_dashboard-content-footer'>
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
                    <div className='mainContent_dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}
export default MainContent;