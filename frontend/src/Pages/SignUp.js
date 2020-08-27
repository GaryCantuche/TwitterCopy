import React from 'react';
import SignUpForm from './../Components/Auth/SignUpForm';

function SignUp () {
    return (
        <div style={{height:"100vh"}} className="container-fluid w-50 border border-primary">
            <SignUpForm />
        </div>
    );
}

export default SignUp;