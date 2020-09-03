import React from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';
import {getSessionCookie} from './../../Utils/authUtils';
import LoggedLinks from './LoggedLinks';
import NotLoggedLinks from './NotLoggedLinks';

function Navigation () {
    return (
        <div style={styles} className="d-flex justify-content-end">
            <div className="w-100 d-flex justify-content-end" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div className="nav__icon__div">
                    <div className="mt-3 mb-5">
                        <TwitterIcon fontSize="large" className="navigation__icons ml-2"/>
                    </div>
                    {
                        getSessionCookie() ? <LoggedLinks /> : <NotLoggedLinks />
                    }
                    
                </div>
            </div>
        </div>
    ); 
}

const styles = {
    width:"33%",
    height:"100vh",
    position:'sticky',
    top: 0
}

export default Navigation;

