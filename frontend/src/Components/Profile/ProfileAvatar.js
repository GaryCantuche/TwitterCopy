import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function ProfileAvatar (props) {  
    const [image,setImage] = useState('');
    useEffect(() => {
        Axios.get('http://localhost:9000/profileImage',{
            params:{
                username:props.username
            }
        },{
            withCredentials:true
        }).then(res => {
            console.log(res);
            if(!image){
                setImage(res.data);
            }
        }).catch(err => {
            console.log(err);
        });
    },[image,props.username]);

    return (
        <div className="profile__avatar">
            <img className="profile__avatar__image" src={`data:image/png;base64,${image}`} alt="profile"/>
        </div>
    );
}

export default ProfileAvatar;
//
//