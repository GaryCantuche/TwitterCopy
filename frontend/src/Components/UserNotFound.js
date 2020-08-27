import React from 'react';
import PageNotFound from './../images/page-not-found.png';
function UserNotFound(){
    return(
        <div className="container w-50">
            <div className="w-100 text-center mt-5">
                <img src={PageNotFound} alt="user not found" />
                <h2 className="text-white mt-3">User doesn't exists</h2>
                <h3 className="text-secondary">Try another user...</h3> 
            </div>
        </div>
        
    );
}

export default UserNotFound;