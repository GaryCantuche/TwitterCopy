import React from 'react';
import {Link} from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import {getSessionCookie} from './../../Utils/authUtils';
import LoggedLinks from './LoggedLinks';
import NotLoggedLinks from './NotLoggedLinks';

function Navigation () {
    return (
        <div className="nav">
            <div className="w-100 h-100 d-flex justify-content-end" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div className="nav__icon__div">
                    <Link to="/home" className="nav__twitter__icon nav__link text-white font-weight-bold mt-3 mb-5"><TwitterIcon fontSize="large" className="navigation__icons  "/></Link>

                    {
                        getSessionCookie() ? <LoggedLinks /> : <NotLoggedLinks />
                    }
                    
                </div>
            </div>
        </div>
    ); 
}

export default Navigation;

