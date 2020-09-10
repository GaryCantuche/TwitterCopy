import React, { useState } from 'react';
import axios from 'axios';

function MessageForm () {
    const [formData,setFormData] = useState('');

    const onChange = (e) => {
        e.preventDefault();
        setFormData(e.target.value);
    } 

    const onSubmit = (e) => {
        e.preventDefault();
        if(formData !== ''){
            axios.post('http://192.168.1.101:9000/storeMessage',{ 
                message:formData
            },{
                withCredentials:true
            }).then(res => {
                if(res.data.isSaved){
                    setFormData('')
                }
            }).catch(err => {
                console.log(err);
            });
        }
    }
    
    return (
        <div className="home__message tweet-box">
                <form className="home__message__form" onSubmit={onSubmit}>
                    <div className="home__message__wrapper__textarea">
                        <textarea value={formData} id="storeFleetTextArea" onChange={onChange} className="home__message__textarea pt-4 pl-3" placeholder="What's happening?" rows="5"></textarea>
                    </div>
                    <div className="home__message__wrapper__button">
                        <button type="submit">Tweet</button>
                    </div>
                </form>
        </div>
    );
}

export default MessageForm;