import React from 'react';
import styles from './deleteModal.module.css'

// {`${styles[]}`}


export default function DeleteConfirmModal(){
    return <>
        <div className={`${"modal fade"}`}>
            <div className={`${styles["modal-dialog"]} ${styles["modal-confirm"]}`}>
                <div className={`${styles["modal-content"]}`}>
                    <div className={`${styles["modal-header"]} ${"flex-column"}`} >
                        <div className="icon-box">
                            <i className="material-icons">&#xE5CD;</i>
                        </div>
                        <h4 className={`${styles["modal-title"]}, ${"w-100"}`}>Are you sure?</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">
                        <p>Do you really want to delete these records? This process cannot be undone.</p>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}