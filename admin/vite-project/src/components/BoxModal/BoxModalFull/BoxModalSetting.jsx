import React from 'react'
import ReservationAdmin from '../../inputGr/inputGrProduct/InpuAdmin'
export default function BoxModalSetting() {
    return (
        <div className="modal fade" id="setting" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel"></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body d-flex">
                        <div className="navigation w-50">
                                
                        </div>
                        <div className="input-gr w-50">
                            <ReservationAdmin/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
