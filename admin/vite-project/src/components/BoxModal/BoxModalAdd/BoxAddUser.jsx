import React, { useContext } from 'react'
import ReservationUser from '../../inputGr/inputGrProduct/inputGrUser'
export default function BoxAddUser() {
    return (
        <>
            <div className="modal fade" id="addUser" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Add users</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <ReservationUser />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}