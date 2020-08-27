import React,{useState} from 'react';

import { Link,useParams } from 'react-router-dom';

function ProfileNavgation () {  
    const { user } = useParams();
    const [active,setActive] = useState('first');
    
    const onClick = (e,link) => {
        if(link === 'first'){
            setActive('first');
        }
        if(link === 'second'){
            setActive('second');
        }
        if(link === 'third'){
            setActive('third');
        }
    }

    return (
        <div className="profile__navigation">
            <ul className="profile__navigation__list">
                <li className={`profile__navigation__item ${active === 'first' ? 'profile__link__active' : ''}`}>
                    <Link to={`/profile/${user}`} onClick={e => onClick(e,'first')} name="profileTweets" className={"profile__navigation__link"}>Tweets</Link>
                </li>
                <li className={`profile__navigation__item ${active === 'second' ? 'profile__link__active' : ''}`}>
                    <Link to={`/profile/${user}/retweets`}  onClick={e => onClick(e,'second')} className={"profile__navigation__link"}>Retweets</Link>
                </li>
                <li className={`profile__navigation__item ${active === 'third' ? 'profile__link__active' : ''}`}>
                    <Link to={`/profile/${user}/pictures`}  onClick={e => onClick(e,'third')} className={"profile__navigation__link"}>Pictures</Link>
                </li>
            </ul>
        </div>
    );
}

export default ProfileNavgation;