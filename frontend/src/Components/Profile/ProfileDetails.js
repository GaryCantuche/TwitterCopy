import React from 'react';
import {useParams} from 'react-router-dom';

import FollowButton from './Followers/FollowButton';

function ProfileDetails (props) {  
    const {user} = useParams();

    return (
        <div className="profile__banner__details">
            <div className="profile__banner__button">
                
                <FollowButton profileUser={user} />
                
            </div>
            <div className="profile__details__username ml-3 text-white">
                <h4>{props.user.username}</h4>
            </div>
            <div className="profile__details__description ml-3 d-flex align-items-center text-white">
                <p className="profile__details__text">{props.user.description}</p>
            </div>
            <div className="profile__details__followers ml-3 d-flex align-items-center text-white">
                <p className="profile__details__text mr-4">{`${props.user.followers} followers`}</p>
                <p className="profile__details__text">{`${props.user.followed} followed`}</p>
            </div>
        </div>
    );
}
export default ProfileDetails;
