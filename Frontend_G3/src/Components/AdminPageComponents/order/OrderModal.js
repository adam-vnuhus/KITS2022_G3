import React, {useState} from 'react';

const OrderModal = (props) => {
    const {id, categories, categoryId, handleChangeStatusOrder} = props
    const [status, setStatus] = useState(categoryId)

    function handleSetStatus(e) {
        // Gui value ve order
        let data = {
            id : id,
            status : Number(status)
        }

        handleChangeStatusOrder(data);
    }

    return (
        <div id="accordion">
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-outline-info collapsed" data-toggle="collapse"
                                data-target={`#${id}`} aria-expanded="false"
                                aria-controls="collapseTwo">
                            Xac nhan don hang
                        </button>
                    </h5>
                </div>

                <div id={id} className="collapse" aria-labelledby="headingTwo"
                     data-parent="#accordion">
                    <div className="card-body">

                        {/*    CATEGORY*/}
                        <div className="d-flex">
                            <select className="custom-select selectCategory" id="inputGroupSelect01" onChange={(e) => setStatus(e.target.value)}>
                                {categories.map((value) => <option value={value.id}
                                                                   key={value.id} selected={value.id === status}>{value.name}</option>)}
                            </select>

                            <button type="button" className="btn btn-outline-primary" onClick={() => handleSetStatus()}>✔️
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;