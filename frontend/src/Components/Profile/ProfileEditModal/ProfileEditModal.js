import React from 'react';
import ProfileEditModalForm from './ProfileEditModalForm';

function ProfileEditModal () {  
    
    return (
        <div className="modal fade" id="ProfileEditModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content profile__edit__modal w-100">
                    <div className="modal-header">
                        <h5 className="modal-title text-white" id="exampleModalLongTitle">Profile Edit</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-white">
                        <ProfileEditModalForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileEditModal;