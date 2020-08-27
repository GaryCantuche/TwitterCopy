import React from 'react';
import loading from './../images/loading.gif';

export default function Loading() {
    return(
        <div className="container w-50 d-flex justify-content-center align-items-center">
            <img src={loading} width="128px" height="128px" alt="loading"/>
        </div>
    );
}