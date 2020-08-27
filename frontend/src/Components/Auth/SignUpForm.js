import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function SignUpForm () {
    const history = useHistory();
    const [dataErrors,setDataErrors] = useState('');
    
    const [userData,setUserData]  = useState({
        email:'',
        password:'',
        firstname:'',
        lastname:'',
        verified:'',
    });

    const onChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        });
    }

    const onSubmit = (e) => { 
        e.preventDefault();
        axios.post('http://localhost:9000/signup',{
            userData:userData
        },{
            withCredentials:true
        }).then(res => {
            if(res.data.isSaved){
                history.push('/home');
                window.location.reload();      
            }else{
                setDataErrors(res.data.message);
            }
        }).catch(err => {
            console.log(err);
        });
    }
    
    return (
        <div >
            <form onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="text-white" htmlFor="inputEmail4">Email</label>
                        <input name="email" onChange={onChange} type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="text-white" htmlFor="inputPassword4">Password</label>
                        <input name="password" onChange={onChange} type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="text-white" htmlFor="inputUsername">Username</label>
                    <input name="username" onChange={onChange} type="text" className="form-control" id="inputUsername" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <label className="text-white" htmlFor="inputFirstname">Firstname</label>
                    <input name="firstname" onChange={onChange} type="text" className="form-control" id="inputFirstname" placeholder="Firstname"/>
                </div>
                <div className="form-group">
                    <label className="text-white" htmlFor="inputLastname">Lastname</label>
                    <input name="lastname" onChange={onChange} type="text" className="form-control" id="inputLastname" placeholder="Lastname"/>
                </div>
                <div className="text-danger mb-2">
                   {dataErrors ? dataErrors : ''}
                </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
        </div>
    );
}

export default SignUpForm;