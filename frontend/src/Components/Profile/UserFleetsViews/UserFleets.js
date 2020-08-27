import React,{useEffect,useState} from 'react';
import FleetsView from './../../FleetView/FleetsView';
import Axios from 'axios';
function UserFleets(props) {
    const [userFleets,setUserFleets] = useState();
    const {_id} = props;
    useEffect(() => {
        Axios.get(`http://localhost:9000/userFleets`,{
            params:{
                username:_id
            }
        },{
            withCredentials:true
        }).then(res => {
            if(res.data){
                setUserFleets(res.data);
            }
        });
    },[_id]);

    return(
        <FleetsView fleetsList={userFleets}/>
    );
    
    
}

export default UserFleets;