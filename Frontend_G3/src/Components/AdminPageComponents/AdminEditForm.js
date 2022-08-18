/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const AdminEditForm = ({itemSelected, selectedID, linkToAPI, entity, columns, fields, onCancel}) => {
    const [item, setItem] = useState(itemSelected);

    let navigate = useNavigate();


    const saveItem = () => {
        let method = 'POST';
        let id = '';
        if (item) {
            method = 'PUT';
            id = selectedID;
        }

        const requestOptions = {
            method: method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(item),
        };
        fetch(
            linkToAPI + id,
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                navigate(-1);
            });
    };

    const handleChange = (event) => {
        console.log(event);
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let data = {...item};
        data[name] = value;
        console.log(name, value);
        setItem(data);
    };

    return (
        <>
            <div style={{
                width: '99vw',
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.7)',
                left: 0,
                top: 0,
                textAlign: 'center',
                display:"flex"
            }}>
                <span className={"col-3"} onClick={onCancel}/>
                <div className={`${"col-7 mx-0 py-5 border bg-white"}`} style={{zIndex: 200}}>
                    <div className="col-lg-10 col-md-12 mx-auto col-sm-12">
                        <h2>
                            <strong>{selectedID ? 'EDIT ' + entity.toUpperCase() : 'NEW ' + entity.toUpperCase()}</strong>
                        </h2>
                        <br/>
                        <div className="px-auto">
                            <table className="table table-user-information">
                                <tbody>
                                {fields.map(
                                    (field, index) => (
                                        <>
                                            <tr key={index}>
                                                {columns[index]!==columns[0]?<><td className="align-middle col-4">
                                                        <strong>{columns[index]}</strong>
                                                    </td>
                                                    <td className={"col"}>
                                                        <input
                                                            type="text"
                                                            className="form-control col-8"
                                                            value={item!=null?item[field]:""}
                                                            name={field}
                                                            onChange={(e) => handleChange(e)}
                                                        />
                                                    </td></>:null}

                                            </tr>
                                        </>
                                    )
                                )}
                                </tbody>
                            </table>
                            <div className={"text-center"}>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    onClick={() => saveItem()}
                                >
                                    Save
                                </button>
                                <span className="col-6"> </span>
                                <button type="button" className="btn btn-secondary btn-lg" onClick={onCancel}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <span className={"col-2"} onClick={onCancel}></span>
            </div>
        </>
    );
};
export default AdminEditForm;
