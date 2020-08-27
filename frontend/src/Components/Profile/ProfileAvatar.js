import React from 'react';

function ProfileAvatar (props) {  
    return (
        <div className="profile__avatar">
            <img className="profile__avatar__image" src={`data:image/png;base64,${props.image}`} alt="profile"/>
        </div>
    );
}

export default ProfileAvatar;
//
//