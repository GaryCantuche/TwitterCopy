import React,{useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import {getSessionCookie} from './../../../Utils/authUtils';
import axios from 'axios';

function FollowButton(props){
    const history = useHistory();
    const [displayButton,setDisplayButton] = useState(3);
    const handleFollowButton = (e) => {
        e.preventDefault();
        axios.post('http://192.168.1.101:9000/follow',{
            username:props.profileUser
        },{
            withCredentials:true
        });
    }

    const goToSignIn = () => {
        history.push('/signin');
    }

    useEffect(() => {
        if(getSessionCookie()){
            axios.get('http://192.168.1.101:9000/isLogged',{
                params:{
                    user:props.profileUser
                },
                withCredentials:true
            }).then(res => {
                console.log(res.data);
                if(res.data.isLogged){
                    setDisplayButton(1);            
                }else if(!res.data.isLogged && !res.data.followed){
                    setDisplayButton(2);
                }else if(!res.data.isLogged && res.data.followed){
                    setDisplayButton(3);
                }
                
            });
            
        }else{
            setDisplayButton(4)
        }
    },[props.profileUser,displayButton]);

    if(displayButton === 1){
        return(<button  className="profile__details__button" data-toggle="modal" data-target="#ProfileEditModal">Profile Edit</button>);        
    }else if(displayButton === 2){
        return(<button  className="profile__details__button" onClick={handleFollowButton}>Follow</button>);
    }else if(displayButton === 3) {
        return (<button  className="profile__details__button__followed">Followed</button>);
    }else{
        return (<button  className="profile__details__button" onClick={goToSignIn}>Follow</button>);
    }
}

export default FollowButton;