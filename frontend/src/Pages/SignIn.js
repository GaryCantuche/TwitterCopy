import React from 'react';
import SignInForm from './../Components/Auth/SignInForm';
import './../styles/signin.css';
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

function SignIn () {
    return (
        <div className="container-fluid signin p-0">
            <div className="signin__information__wrapper p-4">
                <div className="row w-100 m-0">
                    <div className="col-sm-4 p-0">
                        <TwitterIcon style={{color:"white",fontSize:"50px"}}/>
                    </div>
                </div>
                <div className="row w-100 m-0 mt-3">
                    <div className="w-100 p-0 ">
                        <h2 className="w-100 text-white signin__title__font">See what's going on in the world right now</h2>
                    </div>
                </div>   
                <div className="row w-100 m-0 mt-3">
                    <div className="w-100 p-0">
                        <p className="w-100 text-white signin__text__font">Join twitter right now.</p>
                    </div>
                </div>    
                <div className="row w-100 m-0 mt-3">
                    <div className="w-100 p-0">
                        <SignInForm />
                    </div>
                </div>
            </div>

            <div className="signin__banner__wrapper">
                <div className="signin__banner p-4">
                    <div className="signin__banner__text">
                        <SearchIcon className="mr-2"style={{fontSize:"30px"}} />
                        <p className="p-0 m-0">See everything that is happening.</p>
                    </div>
                    <div className="signin__banner__text">
                        <PersonOutlinedIcon className="mr-2"style={{fontSize:"30px"}} />
                        <p className="p-0 m-0">Follow your interests.</p>
                    </div>
                    <div className="signin__banner__text">
                        <ModeCommentOutlinedIcon className="mr-2"style={{fontSize:"30px"}} />
                        <p className="p-0 m-0">Join the conversation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;