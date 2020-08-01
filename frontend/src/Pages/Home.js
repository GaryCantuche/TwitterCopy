import React from 'react';
import TopBar from '../Components/TopBar';
import MessageForm from '../Components/MessageForm';

function Home () {
    return (
        <div className="container w-50 border mh-100">
            <TopBar text="Home" />            
            <MessageForm />
        </div>
    );
}

export default Home;