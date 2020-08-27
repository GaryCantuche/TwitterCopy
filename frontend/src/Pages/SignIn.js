import React from 'react';
import SignInForm from './../Components/Auth/SignInForm';
import './../styles/signin.css';
function SignIn () {
    return (
        <div style={{height:"100vh"}} className=" container-fluid p-0 d-flex flex-row">
            <div className="w-50 h-100 signin__background">
                <div className="d-flex justify-content-center align-items-center w-100 h-50">
                    <h1 className="display-2 text-white signin__title__font">Fleeter</h1>
                </div>
            </div>
            <div className="w-50 h-100 d-flex flex-column justify-content-center align-items-center">
                <div className="w-75 mt-5 mb-5">
                    <h1 className="text-center text-white">¡Welcome!</h1>
                    <h2 className="text-center text-white">See what's going on in the world right now</h2>
                </div>
                <div className="w-75 ">
                    <SignInForm />
                </div>
            </div>
        </div>
    );
}

export default SignIn;