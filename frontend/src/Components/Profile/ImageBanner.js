import React from 'react';

function ImageBanner (props) {  
    
    const onClick = () => {
        
    }

    return (
        <div onClick={onClick} className="profile__banner__img">
            <img src={`data:image/png;base64,${props.image}`}/>
        </div>
    );
}

export default ImageBanner;
//
//