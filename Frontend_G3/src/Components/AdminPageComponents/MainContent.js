import React from 'react';
import {useEffect, useState} from 'react'
import './mainContent.css';
import PageHeader from "./PageHeader";
import {Link} from "react-router-dom";
import AdminEditForm from "./AdminEditForm";
import DeleteConfirmModal from "./DeleteConfirmModal";

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

function MainContent({Props}) {
    const entity = Props.entity;
    const content = Props.content;
    const columns = Props.columns;
    const fields = Props.fields;
    const addNew = Props.addNew;
    const linkToEdit = Props.linkToEdit;
    const linkToDelete = Props.linkToDelete;
    const LinkToSearch = Props.linkToSearch;

    const [isShown,setShown] = useState(false)
    const [showConfirmModal,setShowConfirmModal] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const [items, setItems] = useState(content);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [selectedItem,setSelectedItem] = useState(null);

    useEffect(() => {
        setPagination(calculateRange(content, 5));
        setItems(sliceData(content, page, 5));
    }, []);

    // Search

    useEffect(() => {
        let url = ''
        if (searchTerm.length > 0) {
            url = LinkToSearch + + searchTerm;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setItems(data);
                });
        }
    }, [searchTerm]);

    // Change Page
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setItems(sliceData(content, new_page, 5));
    }

    const columnsData = columns.map((column, index) => (<th className="text-center" key={index}>{column}</th>))

    function editButtonHandler(item) {
        setSelectedItem(item);
        setShown(true);
    }
    function newButtonHandler(item) {
        setSelectedItem(null);
        setShown(true);
    }
    function hideEditForm() {
        setShown(false)
    }
    function deleteButtonHandler(item) {
        setSelectedItem(item);
        setShowConfirmModal(true);
    }
    function hideConfirmModal() {

        setShowConfirmModal(false)
    }
    function reset(){
        setSelectedItem(null);
    }

    const body = (items.length !== 0 ?
        <tbody>

        {items.map((item, index) => (
            <>
                <tr key={index}>
                    {fields.map((field, index) =>
                        !item[field].includes('https')
                            ? <td className="text-center" key={index}>
                                <span>{item[field]}</span>
                            </td>
                            : <td className="text-center" key={index}>
                                <img className="rounded-circle" src={item[field]} width="80px" height="80px"
                                     alt={item[field]}/>
                            </td>)
                    }
                    <td>
                        <button type="button" className="btn btn-primary rounded-circle mx-2" onClick={()=>editButtonHandler(item)}><i className={"fa fa-pen-to-square"}></i></button>
                        <button type="button" className="btn btn-danger rounded-circle mx-2" onClick={()=>deleteButtonHandler(item)}><i className={"fa fa-trash"}></i></button>

                    </td>
                </tr>
            </>
        ))}

        </tbody>
        : null)

    return (
        <>
            {showConfirmModal&&<DeleteConfirmModal onCancel={hideConfirmModal} reset={reset}
                                 selectedID={selectedItem ? selectedItem[fields[0]] : null} linkToAPI={linkToDelete} onshow={showConfirmModal}/>}
            <div className='mainContent_ mainContent_dashboard-content'>
                <PageHeader
                    onClick={newButtonHandler}
                    btnText={addNew === 1 ? "New " + entity : null}/>
                <div className='mainContent_dashboard-content-container'>
                    <div className='mainContent_dashboard-content-header'>
                        <h2>{entity.toUpperCase()} LIST</h2>
                        <div className='mainContent_dashboard-content-search'>
                            <input
                                type='text'
                                value={searchTerm}
                                placeholder='Search..'
                                className='mainContent_dashboard-content-input'
                                onChange={e => setSearchTerm(e.target.value)}/>
                        </div>
                    </div>
                    {isShown&& <AdminEditForm columns={columns} fields={fields} entity={entity} itemSelected={selectedItem}
                                              linkToAPI={linkToEdit} selectedID={selectedItem?selectedItem[fields[0]]:null} onCancel={hideEditForm} reset={reset}/>}

                    <table>
                        <thead>
                        <tr>{columnsData}<th className={"text-center"}>ACTIONS</th></tr>
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
        </>

    )
}
export default MainContent;