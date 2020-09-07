import React from 'react'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
function NotLoggedLinks () {
    return (
        [
            <Link key="signin" to="/signin" className="nav-hover nav__font nav__link text-white font-weight-bold w-75 mt-3 p-2"><VpnKeyIcon fontSize="large" className=""/><span className="nav__link__text">Sign In</span></Link>,
            <Link key="signup" to="/signup" className="nav-hover nav__font nav__link text-white font-weight-bold w-75 mt-3 p-2"><AddIcon fontSize="large" className=""/><span className="nav__link__text">Sign Up</span></Link>
        ]
    );
}

export default NotLoggedLinks;