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
        <div className="row mt-3 tweet-box">
            <div className="col-sm d-flex justify-content-center align-items-center ">
                <form className="w-50" onSubmit={onSubmit}>
                    <div className="form-group w-100">
                        <textarea value={formData} id="storeFleetTextArea" onChange={onChange} className="w-100 pl-2" placeholder="Post your message..." rows="5"></textarea>
                    </div>
                    <div className="form-group w-100 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MessageForm;