import React, { useContext } from 'react'
import Reservation from '../../inputGr/inputGrProduct/inputGrProduct'
export default function BoxAddProduct() {
    return (
        <>
            <div className="modal fade" id="addProduct" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Add products</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <Reservation />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
