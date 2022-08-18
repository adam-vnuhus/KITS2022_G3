/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

const AdminEditForm = ({itemSelected, linkToAPI, entity, columns, fields,show}) => {
    const params = useParams();
    const [item, setItem] = useState(itemSelected);

    let navigate = useNavigate();

    const itemID = item[fields[0]];
    const saveItem = () => {
        let method = 'POST';
        let id = '';
        if (item) {
            method = 'PUT';
            id = itemID;
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
            <div className={`${show} ${"container col-8"}`}>
                <div className="container">
                    <div className="container">
                        <div className="col-lg-10 col-md-12 mx-auto col-sm-12">
                            <h2><strong>{item ? 'EDIT ' + entity.toUpperCase() : 'NEW ' + entity.toUpperCase()}</strong>
                            </h2>
                            <br/>
                            <div className="table-responsive">
                                <table className="table table-user-information">
                                    <tbody>
                                    <tr>
                                        {item ? (
                                            <td className="my-3 align-middle col-3">
                                                <strong>{entity} ID</strong>
                                            </td>
                                        ) : null}
                                        <td className="text-primary">{itemID}</td>
                                    </tr>
                                    {item.map((item, index) => (
                                        <tr key={index}>
                                            {fields.map(
                                                (field) => (
                                                    <>
                                                        <td className="my-3 align-middle col-3">
                                                            <strong>{columns[index]}</strong>
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={item[field]}
                                                                name={field}
                                                                onChange={(e) => handleChange(e)}
                                                            />
                                                        </td>
                                                    </>
                                                )
                                            )}
                                        </tr>))}
                                    </tbody>
                                </table>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => saveItem()}
                                    >
                                        Save
                                    </button>
                                    <span> </span>
                                    <Link to="/">
                                        <button type="button" className="btn btn-secondary">
                                            Cancel
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminEditForm;
