import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {Link} from 'react-router-dom';
import {getCurrentUserName} from './../../Utils/authUtils';
import {removeSessionDataFromLocalStorage} from './../../Utils/authUtils';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';

function LoggedLinks () {
    const history = useHistory();
    //eslint-disable-next-line
    const [cookies,setCookie,removeCookie] = useCookies(['user_sid']);

    const logout = async () => {
        await axios.get('http://localhost:9000/logout',{
            withCredentials:true
        }).then(res => {
            if(res.data.isLogout){
                removeCookie('user_sid');
                removeSessionDataFromLocalStorage();
                history.push('/signin');
                window.location.reload();
            }
        });
    }

    return (
        [
            <Link key="home" to="/home" className="nav-hover nav__font nav__link text-white font-weight-bold w-75 mt-3 p-2"><HomeIcon fontSize="large" className="mr-2"/>Home</Link>,
            <Link key="profile" to={goToUserProfile()} className="nav-hover nav__font nav__link text-white font-weight-bold w-75 mt-3 p-2"><PersonOutlineIcon fontSize="large" className="mr-2" /> Profile</Link>,
            <Link key="messages" to="/messages" className="nav-hover nav__font nav__link text-white font-weight-bold w-75 mt-3 p-2"><MailOutlineIcon fontSize="large" className="mr-2"/>Messages</Link>,
            <Link key="loguout" to="/logout" onClick={logout} className="nav-hover nav__font nav__link text-white font-weight-bold w-75 mt-3 p-2"><ExitToAppIcon fontSize="large" className="mr-2" /> Logout</Link>
        ]
    );
}


const goToUserProfile = () => {
    const username = getCurrentUserName();
    if(username){
        return `/profile/${username}`;
    }else{
        return 'profile';
    }
}

export default LoggedLinks;