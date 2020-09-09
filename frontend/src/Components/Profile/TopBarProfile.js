import React from 'react';
import './../../styles/profile.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {useHistory} from 'react-router-dom';

function TopBarProfile () {  
    const history = useHistory();
    return (
        <div className="row profile__topbar m-0 p-0">
            <div className="col-sm d-flex align-items-center  p-1">
                <div className="mr-4 ml-2 d-flex justify-content-center align-items-center profile__topbar__icon__outside">
                    <KeyboardBackspaceIcon onClick={history.goBack} className="profile__topbar__icon"/>
                </div>
                <h4 className="text-white">Profile</h4>
            </div>
        </div>
    );
}

export default TopBarProfile;
