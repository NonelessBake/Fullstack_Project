import React, { useContext } from 'react'
import Reservation from '../../inputGr/inputGrProduct/inputGrProduct'
import { ActicleContext } from '../../../context/ActicleContext'
export default function BoxAddProduct() {
    const { onSubmitData } = useContext(ActicleContext)
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
                        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                data-bs-target="#exampleModalToggle2"
                                data-bs-toggle="modal"
                                onClick={onSubmitData}
                            >Open second modal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
