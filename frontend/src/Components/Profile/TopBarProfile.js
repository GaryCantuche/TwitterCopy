import React from 'react';
import './../../styles/profile.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {useHistory} from 'react-router-dom';

function TopBarProfile (props) {  
    const history = useHistory();
    return (
        <div className="row border">
            <div className="col-sm d-flex align-items-center  p-1">
                <div className="mr-4 ml-2 d-flex justify-content-center align-items-center profile__topbar__icon__outside">
                    <KeyboardBackspaceIcon onClick={history.goBack} className="profile__topbar__icon"/>
                </div>
                <h3 className="text-white">{props.user}</h3>
            </div>
        </div>
    );
}

export default TopBarProfile;
