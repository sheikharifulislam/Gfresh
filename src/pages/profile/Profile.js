import React, { useContext, useState } from 'react';
import {FaCamera} from 'react-icons/fa'
import { FirebaseContext } from '../../context/FirebaseProvider';
import useLoadUserData from '../../customHooks/loadUserData';
import baseulr from '../../utils/baseurl';
import './profile.css';

const Profile = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [userInfo, setUserInfo] = useState({});
    const baseUrl = baseulr();
    const {user} = useContext(FirebaseContext);
    const userData = useLoadUserData(user.email);
    const handleInput = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const updateInfo = {...userInfo};
        updateInfo[field] = value;
        setUserInfo(updateInfo);
    }
    return (
        <div className="profile-container">
            <div className="profile-container-title">
                <h1>Update Your Profile</h1>
            </div>
            <div className="profile-image-section">
                <img src={profilePic ? URL.createObjectURL(profilePic) : `${baseUrl}${userData?.photoUrl}`} alt="User Avatar" />
                <label for="profile-pic-uploader" id="uploader">
                    <FaCamera className="upload-icon" />
                </label >
                <input type="file" accept='image/*' id="profile-pic-uploader" onChange={(e) => setProfilePic(e.target.files[0])} />         
            </div>
            <div className="profile-form">
                <form action="">                
                    <input type="text" placeholder="Enter Your Name" id="name" name="name" onInput={handleInput} required/>
                    <input type="email" placeholder='Enter Your Email Address' name="email" id="email" onInput={handleInput} required/>
                    <input type="number" placeholder="Enter your Mobile Number" name="mobileNumber" id="mobileNumber" onInput={handleInput} required/>                    
                </form>
            </div>
        </div>
    );
};

export default Profile;