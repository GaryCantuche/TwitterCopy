import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {setSessionDataToLocalStorage} from './../../Utils/authUtils';

function SignInForm () {
    const history = useHistory();
    const [userData,setUserData]  = useState({
        email:'',
        password:''
    });
    const [dataErrors,setDataErrors] = useState('');

    const onChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        });
    }

    const onSubmit = (e) => { 
        e.preventDefault();
        axios.post('http://192.168.1.101:9000/login',{
            email:userData.email,
            password:userData.password
        },{
            withCredentials:true
        }).then(res => {
            if(res.data.sessionID){
                setSessionDataToLocalStorage(res.data);
                history.push('/home');
                window.location.reload();      
            }else{
                setDataErrors(res.data.message);
            }
        });
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label forhtml="exampleInputEmail1" className="text-white">Email address</label>
                    <input onChange={onChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/ >
                </div>
                <div className="form-group">
                    <label forhtml="exampleInputPassword1" className="text-white">Password</label>
                    <input onChange={onChange} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <small id="passwordHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
                </div>
                <div className="text-danger mb-2">
                   {dataErrors ? dataErrors : ''}
                </div>
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn btn-primary">¡Sign Up!</button>
                </div>
                
            </form>
        </div>
    );
}

export default SignInForm;