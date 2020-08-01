import React from 'react';
import {Link} from 'react-router-dom';
import browser from './../../images/browser.png';
import user from './../../images/user.png';
function Navigation () {
    return (
        <div style={styles} className="w-25 d-flex justify-content-end border-right">
            <div className="nav flex-column nav-pills mt-5 mr-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <Link to="/home" className="nav-link nav-hover d-flex align-items-center text-white"><img className="mr-2" src={browser} alt="Home icon" />Home</Link>
                <Link to="/home" className="nav-link nav-hover d-flex align-items-center text-white"><img className="mr-2" src={user} alt="User profile icon" />Profile</Link>
            </div>
        </div>
    );
}

const styles = {
    height:"100vh"
}

export default Navigation;