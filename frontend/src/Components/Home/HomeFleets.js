import React, { useEffect, useState } from 'react';
import FleetsView from './../FleetView/FleetsView';
import axios from 'axios';

function HomeFleets () {
    const [fleets,setFleets] = useState('');
    useEffect(() => {
        axios.get('http://localhost:9000/fleetsList',{
            withCredentials:true
        }).then(res => {
            if(res.data){
                setFleets(res.data);
            }
        }).catch(err => {
            console.log(err);
        });
    },[]);
    return (
        <FleetsView fleetsList={fleets} />
    );
}

export default HomeFleets;
