import React, { useEffect, useState } from 'react';
import FleetsView from './../FleetView/FleetsView';
import axios from 'axios';

function HomeFleets () {
    const [fleets,setFleets] = useState('');
    useEffect(() => {
        axios.get('http://192.168.1.101:9000/fleetsList',{
            withCredentials:true
        }).then(res => {
            if(!fleets){
                setFleets(res.data);
            }
        }).catch(err => {
            console.log(err);
        });
    },[fleets]);
    return (
        <FleetsView fleetsList={fleets} />
    );
}

export default HomeFleets;
