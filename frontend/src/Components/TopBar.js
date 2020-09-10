import React from 'react';

function TopBar (props) {
    return (
        <div className="row tweet-box">
            <div className="col-sm">
                <h4 className="p-2 text-white">{props.text}</h4>
            </div>     
        </div>
    );
}

export default TopBar;