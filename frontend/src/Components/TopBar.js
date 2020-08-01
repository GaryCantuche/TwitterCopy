import React from 'react';

function TopBar (props) {
    return (
        <div className="row mt-3 tweet-box">
            <div className="col-sm mw-100">
                <h1 className="text-center text-white">{props.text}</h1>
            </div>     
        </div>
    );
}

export default TopBar;