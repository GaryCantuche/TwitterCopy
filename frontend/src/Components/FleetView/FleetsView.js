import React from 'react';
import './../../styles/fleet.css';
import Fleet from './Fleet';

function FleetsView (props) {
    return(
        <div className="row p-0 m-0">
            {displayFleetsView(props.fleetsList)}
        </div>
    );
}

export default FleetsView;

const displayFleetsView = (fleetsList) => {
    if(fleetsList === undefined){
        return('');
    }else{
        return(
            Array.from(fleetsList).map((item,index) => {
                return(
                    <Fleet key={index} fleet={item} index={index}/>
                );
            })
        );
    }
    
}
