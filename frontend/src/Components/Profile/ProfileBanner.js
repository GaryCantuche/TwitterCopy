import React from 'react';
import ImageBanner from './ImageBanner';
import ProfileDetails from './ProfileDetails';
import ProfileAvatar from './ProfileAvatar'

function ProfileBanner (props) {  
    return (
        <div className="row m-0">
            <div className="profile__banner col-sm p-0">
                <ProfileAvatar image={props.user.profileImage}/>
                <ImageBanner image={props.user.bannerImage}/>
                <ProfileDetails user={props.user} />
            </div>
        </div>
    );
}

export default ProfileBanner;