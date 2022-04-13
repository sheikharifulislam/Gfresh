import axios from 'axios';
import  { useEffect, useState } from 'react';
import baseulr from '../utils/baseurl';

const useLoadUserData = (userEmail) => {
    const [userData, setUserData] = useState({});
    const baseUrl = baseulr();   
    useEffect(() => {
       async function fetchApi() {
            const response = await axios.get(`${baseUrl}user/single-user?userEmail=${userEmail}`)
            const data = response.data;           
            setUserData(data);
       }
       fetchApi();
    },[baseUrl,userEmail])
    return userData;
};

export default useLoadUserData;