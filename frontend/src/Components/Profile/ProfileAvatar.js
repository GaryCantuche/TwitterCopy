import React from 'react';
import avatar from './../../images/user.png'
function ProfileAvatar (props) {  
    return (
        <div className="profile__avatar">
            <img className="profile__avatar__image" src={props.image ? `data:image/png;base64,${props.image}` : avatar} alt="profile"/>
        </div>
    );
}

export default ProfileAvatar;