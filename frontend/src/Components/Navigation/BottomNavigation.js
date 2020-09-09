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
import { getSessionCookie } from '../../Utils/authUtils';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AddIcon from '@material-ui/icons/Add';

function BottomNavigation(){

    const history = useHistory();
    //eslint-disable-next-line
    const [cookies,setCookie,removeCookie] = useCookies(['user_sid']);

    const logout = async () => {
        await axios.get('http://192.168.1.101:9000/logout',{
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

    const goToUserProfile = () => {
        const username = getCurrentUserName();
        if(username){
            return `/profile/${username}`;
        }else{
            return 'profile';
        }
    }

    return(
        <div className="bottom__nav">
                {
                    getSessionCookie()  
                        
                        ?

                        <div className="bottom__nav__list">
                            <Link key="home" to="/home" className="bottom__nav__link text-white font-weight-bold"><HomeIcon fontSize="large" className=""/><span className="nav__link__text">Home</span></Link>,
                            <Link key="profile" to={goToUserProfile()} className="bottom__nav__link text-white font-weight-bold"><PersonOutlineIcon fontSize="large" className="" /><span className="nav__link__text">Profile</span></Link>,
                            <Link key="messages" to="/messages" className="bottom__nav__link text-white font-weight-bold"><MailOutlineIcon fontSize="large" className=""/><span className="nav__link__text">Messages</span></Link>,
                            <Link key="loguout" to="/logout" onClick={logout} className="bottom__nav__link text-white font-weight-bold"><ExitToAppIcon fontSize="large" className="" /><span className="nav__link__text">Logout</span></Link>
                        </div> 
                        
                        :
                        
                        <div className="bottom__nav__list">
                            <Link key="signin" to="/signin" className="bottom__nav__link text-white font-weight-bold"><VpnKeyIcon fontSize="large" className=""/><span className="nav__link__text">Sign In</span></Link>,
                            <Link key="signup" to="/signup" className="bottom__nav__link text-white font-weight-bold"><AddIcon fontSize="large" className=""/><span className="nav__link__text">Sign Up</span></Link>
                        </div>
                }
        </div>
    );


}

export default BottomNavigation;