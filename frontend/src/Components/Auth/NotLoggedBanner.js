import React from 'react';
import { Link } from 'react-router-dom';

function NotLoggedBanner() {
    return(
        <div className="not__logged__banner">
            <div className="not__logged__banner__container">
                <div className="not__logged__banner__container__text">
                    <h4 className="not__logged__banner__container__title"><strong>Don't miss what is happening!</strong></h4>
                    <h6 className="not__logged__banner__container__title">Twitter users are first to know</h6>
                </div>
                <div className="not__logged__banner__container__buttons">
                    <Link style={styles.signin__button} to="/signin" className="not__logged__banner__container__button">Sign In</Link>
                    <Link style={styles.signup__button} to="/signup" className="not__logged__banner__container__button">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

const styles = {
    signup__button:{
        color:"white",
    },
    signin__button:{
        backgroundColor:"white",
        color:"rgb(29, 161, 242)",
    }
}

export default NotLoggedBanner;