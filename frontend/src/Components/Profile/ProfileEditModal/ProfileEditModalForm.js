import React, { useState } from 'react';
import axios from 'axios';

function ProfileEditModalForm() {
    const [profileValues,setProfileValues] = useState({});

    const [profileImage,setProfileImage] = useState('');

    const [bannerImage,setBannerImage] = useState('');

    const onChange = (e) => {
        e.preventDefault();
        setProfileValues({
            ...profileValues,
            [e.target.name]:e.target.value
        });
    }

    const storeProfileImage = (e) => {
        e.preventDefault();
        console.log(e.target.files);
        setProfileImage(e.target.files[0]);
    }

    const storeBannerImage = (e) => {
        e.preventDefault();
        setBannerImage(e.target.files[0]);
    }

    const sendProfileImages = async () => {
        const formData = new FormData();
        formData.append('profileImage',profileImage);
        formData.append('bannerImage',bannerImage);

        const uploaded = await axios.post( "http://localhost:9000/uploadProfilePhoto",formData,{
            headers:{
                'content-type': 'multipart/form-data'
            },
            withCredentials:true
        });

        return uploaded;
    }

    const sendProfileValues = async () => {
        return await axios.post( "http://localhost:9000/uploadProfile",{
            profileValues:profileValues
        },{
            withCredentials:true
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const uploadedImage = await sendProfileImages();

        if(!uploadedImage.data.isSaved){
            alert('Image is not been saved!');
        }
        
        const uploadedProfileValues = await sendProfileValues();

        if(!uploadedProfileValues.data.isSaved){
            alert('Profile values not been updated');
        }
    }

    return(
        <form onSubmit={onSubmit} encType="multipart/form-data"> 
            <div className="col-sm mt-3">
                <label>Banner Image</label>
                <input onChange={storeBannerImage} type="file" name="bannerImage" className="form-control profile__edit__modal__fields" />
            </div>
            <div className="col-sm mt-3">
                <label>Profile Image</label>
                <input onChange={storeProfileImage} type="file" name="profileImage" className="form-control profile__edit__modal__fields" />
            </div>
            <div className="col-sm mt-3">
                <label>Descripción</label>
                <textarea onChange={onChange} name="description" className="form-control profile__edit__modal__fields" rows="3"></textarea>
            </div>
            <div className="col-sm mt-3">
                <label>Location</label>
                <input onChange={onChange} type="text" name="location" className="form-control profile__edit__modal__fields" />
            </div>
            <div className="col-sm mt-3">
                <label>Webside</label>
                <input onChange={onChange} type="text" name="website" className="form-control profile__edit__modal__fields"/>
            </div>
            <div className="col-sm mt-3">
                <label>Date</label>
                <input onChange={onChange} name="date" className="form-control profile__edit__modal__fields" type="date"/>
            </div>
            <div className="col-sm mt-3 d-flex justify-content-end">
                <button type="button" className="btn btn-secondary mr-3" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
           
        </form>
    );
}                
export default ProfileEditModalForm;
