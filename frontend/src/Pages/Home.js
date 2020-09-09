import React, { useEffect } from 'react';
import TopBar from '../Components/TopBar';
import MessageForm from '../Components/MessageForm';
import {useHistory} from 'react-router-dom';
import { getCookie } from 'react-use-cookie';
import './../styles/home.css';
import HomeFleets from '../Components/Home/HomeFleets';
import BottomNavigation from './../Components/Navigation/BottomNavigation';
function Home () {
    const history = useHistory();
    const userUID = getCookie('user_sid');

    useEffect(() => {
        if(!userUID){
            history.push('/signin');
        }
    }, [userUID,history])
    
    return (
        <div className="container home border-left border-right border-secondary m-0 p-0">
            <TopBar text="Home" />            
            <MessageForm />
            <HomeFleets />
            <BottomNavigation />
        </div>
    );
}


export default Home;