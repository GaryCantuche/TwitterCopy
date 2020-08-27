import React, {useEffect } from 'react';
import UserFleets from './UserFleets';

function UserFleetsView(props) {
    useEffect(() => {
        if(props.location.includes('retweets')){
            //getUserDataRetweets();
        }else if(props.location.includes('pictures')){
            //getUserDataPictures();
        }
    })

    
    if(props.location.includes('retweets')){
        /* return(
            <UserRefleets />
        ); */
    }else if(props.location.includes('pictures')){
        /* return(
            <UserPictures />
        ); */
    }else{
        return(
            <UserFleets user={props.user} />
        );
    }
    
}

export default UserFleetsView;