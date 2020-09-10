import React from 'react';
import './../../styles/fleet.css';
import avatar from './../../images/user.png'
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import moment from 'moment';

function Fleet (props) {
    const {fleet,index} = props;
    return(
        <div key={index} className="d-flex flex-wrap mt-2 w-100 p-2 border-bottom border-secondary">
            <div className="h-100">
                    <div className="" >
                        <img loading="lazy" alt="User profile" className="fleet__avatar" src={fleet.profileImage ? `data:image/png;base64,${fleet.profileImage}` : avatar}/>
                    </div>
            </div>
            <div className="fleet__body">
                <div className="w-100 pl-3 fleet d-flex align-items-center">
                        <p className="mr-2 text-white font-weight-bold m-0">{fleet.username}</p>
                        {
                        fleet.verified ? 
                            <div className="mr-2">
                                <VerifiedUserIcon className="fleet__verified__button" />
                            </div>
                            : ''
                        }
                        <p className="mr-2 text-muted m-0">
                            {
                                fleetPublishedMoment(fleet.date)
                            }
                        </p>
                </div>
            <div className="w-100 pl-3 fleet d-flex align-items-center ">
                    <p className="text-white m-0">{fleet.fleet}</p>
            </div>
                <div className="fleet__footer">
                    <div className="fleet__buttons__outside">
                        <ChatIcon className="fleet__buttons" />
                    </div>
                    <div className="fleet__buttons__outside">
                        <RepeatIcon className="fleet__buttons" />
                    </div>
                    <div className="fleet__buttons__outside">
                        <FavoriteBorderIcon className="fleet__buttons" />
                    </div>
                    <div className="fleet__buttons__outside">
                        <ShareIcon className="fleet__buttons" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fleet;

const fleetPublishedMoment = (date) => {
    const result = moment(moment(date).toDate()).startOf('hour').fromNow(true);

    if(result.includes('an')){
        return result.replace('an',1);
    }else if(result.includes('a ')){
        return result.replace('a ','1 ');
    }else{
        return result;
    }
} 
