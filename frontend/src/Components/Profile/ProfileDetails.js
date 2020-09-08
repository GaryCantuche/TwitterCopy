import React, { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import {getSessionCookie} from './../../Utils/authUtils';
import axios from 'axios';

function ProfileDetails (props) {  
    const {user} = useParams();
    const [displayButton,setDisplayButton] = useState(false);
    const handleFollowButton = (e) => {
        e.preventDefault();
        axios.post('http://192.168.1.101:9000/follow',{
            username:user
        },{
            withCredentials:true
        })
    }

    useEffect(() => {
        if(getSessionCookie()){
            axios.get('http://192.168.1.101:9000/isLogged',{
                params:{
                    user:user
                },
                withCredentials:true
            }).then(res => {
                console.log(res);
                if(!displayButton){
                    if(res.data){
                        setDisplayButton(<button  className="profile__details__button" data-toggle="modal" data-target="#ProfileEditModal">Profile Edit</button>);            
                    }else{
                        setDisplayButton(<button  className="profile__details__button" onClick={handleFollowButton}>Follow</button>);
                    }
                }
            });
            
        }else{
            if(!displayButton){
                setDisplayButton(<div className="profile__edit__not__found"></div>)
            }
        }
    },[user,displayButton]);

    return (
        <div className="profile__banner__details">
            <div className="profile__banner__button">
                {
                    displayButton
                }
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
