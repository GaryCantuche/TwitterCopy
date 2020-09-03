import React from 'react';
import ProfileEditModalForm from './ProfileEditModalForm';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function ProfileEditModal () {  
    
    return (
        <div className="modal fade" id="ProfileEditModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content profile__edit__modal w-100">
                    <div className="modal-header">
                        <div className="w-100 modal-title profile__edit__modal__header text-white">
                            <PersonOutlineIcon className="mr-2" fontSize="large"/> 
                            <h5 id="exampleModalLongTitle">Profile Edit</h5>    
                        </div>
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