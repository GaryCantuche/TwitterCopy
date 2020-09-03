import React from 'react'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
function NotLoggedLinks () {
    return (
        [
            <Link key="signin" to="/signin" className="nav-hover nav__font nav__link text-white font-weight-bold w-75 mt-3 p-2"><VpnKeyIcon fontSize="large" className="mr-2"/>Sign In</Link>,
            <Link key="signup" to="/signup" className="nav-hover nav__font nav__link text-white font-weight-bold w-75 mt-3 p-2"><AddIcon fontSize="large" className="mr-2"/>Sign Up</Link>
        ]
    );
}

export default NotLoggedLinks;