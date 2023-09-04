import React, { useContext, useEffect } from 'react'
export default function BoxModalProduct(props) {
    const handleSubmit = (event) =>{
        console.log('from')
    }
    return (
        <div className="modal fade" id={"staticBackdrop" + props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{props.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <input type="text" className="form-control" placeholder="Nameproduct" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="ex: Sofa,Living Room,Living Room" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2">Category</span>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Tags" aria-label="Tags" />
                                <span className="input-group-text">&</span>
                                <input type="text" className="form-control" placeholder="Brand" aria-label="Brand" />
                            </div>
                            <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">$</span>
                                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                <span className="input-group-text">.00</span>
                            </div>
                            <div className="input-group mb-3">
                                <input type="number" className="form-control" placeholder="Discount" aria-label="Discount" />
                                <span className="input-group-text">@</span>
                                <input type="number" className="form-control" placeholder="Status" aria-label="Status" />
                            </div>
                            <div className="input-group">
                                <span className="input-group-text">Discription</span>
                                <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                            </div>
                        </form>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onChange={ handleSubmit}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}
