import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {removeSessionDataFromLocalStorage} from './../../Utils/authUtils';
import {getCurrentUserName} from './../../Utils/authUtils';
function Navigation () {
    const history = useHistory();
    //eslint-disable-next-line
    const [cookies,setCookie,removeCookie] = useCookies(['user_sid']);
    const logout = async () => {
        await axios.get('http://localhost:9000/logout',{
            withCredentials:true}
        ).then(res => {
            if(res.data.isLogout){
                removeCookie('user_sid');
                removeSessionDataFromLocalStorage();
                history.push('/signin');
                window.location.reload();
            }
        });
    }

    return (
        <div style={styles} className="w-25 d-flex justify-content-end">
            <div className="w-100 d-flex justify-content-end" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div className="nav__icon__div">
                    <div className="mt-3 mb-5">
                        <TwitterIcon fontSize="large" className="navigation__icons ml-2"/>
                    </div>
                    <Link to="/home" className="nav-hover nav__font nav__link text-white font-weight-bold w-75 mt-3 p-2"><HomeIcon fontSize="large" className="mr-2"/>Home</Link>
                    <Link to={goToUserProfile()} className="nav-hover nav__font nav__link text-white font-weight-bold w-75 mt-3 p-2"><PersonOutlineIcon fontSize="large" className="mr-2" /> Profile</Link>
                    <Link to="/messages" className="nav-hover nav__font nav__link text-white font-weight-bold w-75 mt-3 p-2"><MailOutlineIcon fontSize="large" className="mr-2"/>Messages</Link>
                    <Link to="/logout" onClick={logout} className="nav-hover nav__font nav__link text-white font-weight-bold w-75 mt-3 p-2"><ExitToAppIcon fontSize="large" className="mr-2" /> Logout</Link>
                </div>
            </div>
        </div>
    ); 
}

const styles = {
    height:"100vh",
    position:'sticky',
    top: 0
}

const goToUserProfile = () => {
    const username = getCurrentUserName();
    if(username){
        return `/profile/${username}`;
    }else{
        return 'profile';
    }
}


export default Navigation;

