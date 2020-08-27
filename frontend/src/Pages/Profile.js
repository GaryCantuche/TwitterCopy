import React, { useEffect, useState } from 'react';
import {useLocation, useParams} from 'react-router-dom';
import TopBarProfile from '../Components/Profile/TopBarProfile';
import ProfileBanner from './../Components/Profile/ProfileBanner';
import ProfileEditModal from '../Components/Profile/ProfileEditModal/ProfileEditModal';
import UserFleetsViews from './../Components/Profile/UserFleetsViews/UserFleetsView';
import axios from 'axios';
import Loading from './../Components/Loading';
import UserNotFound from '../Components/UserNotFound';

function Profile () {  
    const location = useLocation();
    const {user} = useParams();
    const [userData,setUserData] = useState();
    const [userNotFound,setUserNotFound] = useState(false);
    useEffect(() => {
        if(!userData) {
            axios.post(`http://localhost:9000/userData`,{
                user:user
            },{
                withCredentials:true
            }).then(res => {
                if(!userData){
                    setUserData(res.data);
                }
            }).catch(err => {
                console.log(err);
                if(err.response.status === 404){
                    setUserNotFound(true);
                }
            });
        }
    },[location,userData,user]);

    if(userData){
        return (
            <div className="container w-50 border-left border-right border-secondary">
                <TopBarProfile user={userData.username} />
                <ProfileBanner user={userData} />
                <UserFleetsViews user={userData} location={location.pathname}/>
                <ProfileEditModal user={userData} />
            </div>
        );
    }else if(userNotFound){
        return (
            <UserNotFound />
        );
    }else if(!userData){
        return (
            <Loading />
        );
    }
}

export default Profile;
