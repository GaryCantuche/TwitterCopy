import React from 'react';
import {useParams} from 'react-router-dom';
import FollowButton from './Followers/FollowButton';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function ProfileDetails (props) {  
    const {user} = useParams();

    return (
        <div className="profile__banner__details">
            <div className="profile__banner__button">
                
                <FollowButton profileUser={user} />
                
            </div>
            <div className="profile__details__username pl-3 text-white">
                <h4 className="mr-2 m-0 p-0">{props.user.username}</h4>
                <span>{props.user.verified ? <VerifiedUserIcon className="fleet__verified__button"/> : ''}</span>
            </div>
            <div className="profile__details__description pl-3 d-flex align-items-center text-white">
                <p className="profile__details__text">{props.user.description}</p>
            </div>
            <div className="profile__details__followers pl-3 d-flex align-items-center text-white">
                <p className="profile__details__text mr-4">{`${props.user.followers} followers`}</p>
                <p className="profile__details__text">{`${props.user.followed} followed`}</p>
            </div>
        </div>
    );
}
export default ProfileDetails;
