import React from 'react';
import ProfileNavigation from './ProfileNavigation';
import {useParams} from 'react-router-dom';
import {getSessionCookie} from './../../Utils/authUtils';

function ProfileDetails (props) {  
    const {user} = useParams();

    return (
        <div className="profile__banner__details">
            <div className="mr-3 mt-3 d-flex justify-content-end">
                {
                    getSessionCookie(user) 
                        ? 
                            <button  className="profile__edit__button" data-toggle="modal" data-target="#ProfileEditModal">Profile Edit</button>
                        :
                            <div className="profile__edit__not__found"></div>
                }
            </div>
            <div className="ml-3 text-white">
                <h4>{props.user.username}</h4>
            </div>
            <div className="ml-3 d-flex align-items-center text-white">
                <p className="profile__details__text">{props.user.description}</p>
            </div>
            <div className="ml-3 d-flex align-items-center text-white">
                <p className="profile__details__text mr-4">{`${props.user.followers} followers`}</p>
                <p className="profile__details__text">{`${props.user.followed} followed`}</p>
            </div>
            <ProfileNavigation />
        </div>
    );
}


export default ProfileDetails;
