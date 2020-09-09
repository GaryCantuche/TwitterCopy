import React, { useEffect, useState } from 'react';
import {useLocation, useParams} from 'react-router-dom';
import TopBarProfile from '../Components/Profile/TopBarProfile';
import ProfileBanner from './../Components/Profile/ProfileBanner';
import ProfileEditModal from '../Components/Profile/ProfileEditModal/ProfileEditModal';
import UserFleetsViews from './../Components/Profile/UserFleetsViews/UserFleetsView';
import axios from 'axios';
import Loading from './../Components/Loading';
import UserNotFound from '../Components/UserNotFound';
import ProfileNavigation from '../Components/Profile/ProfileNavigation'
import BottomNavigation from './../Components/Navigation/BottomNavigation';

function Profile () {  
    const location = useLocation();
    const {user} = useParams();
    const [userData,setUserData] = useState();
    const [userNotFound,setUserNotFound] = useState(false);
    useEffect(() => {
        if(!userData) {
            axios.post(`http://192.168.1.101:9000/userData`,{
                user:user
            },{
                withCredentials:true
            }).then(res => {
                if(!userData){
                    setUserData(res.data);
                }
            }).catch(err => {
                if(err.response){
                    if(err.response.status === 404){
                        setUserNotFound(true);
                    }else{
                        console.log('Pepe')
                    }
                }
            });
        }
    },[location,userData,user]);

    if(userData){
        return (
            <div className="container profile border-left border-right border-secondary m-0 p-0">
                <TopBarProfile user={userData.username} />
                <ProfileBanner user={userData} />
                <ProfileNavigation />
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
