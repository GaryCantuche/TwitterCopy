import React, { useEffect } from 'react';
import TopBar from '../Components/TopBar';
import MessageForm from '../Components/MessageForm';
import {useHistory} from 'react-router-dom';
import { getCookie } from 'react-use-cookie';
import './../styles/home.css';
import HomeFleets from '../Components/Home/HomeFleets';
function Home () {
    const history = useHistory();
    const userUID = getCookie('user_sid');

    useEffect(() => {
        if(!userUID){
            history.push('/signin');
        }
    }, [userUID,history])
    
    return (
        <div className="container w-50 border-left border-right border-secondary">
            <TopBar text="Home" />            
            <MessageForm />
            <HomeFleets />
        </div>
    );
}


export default Home;