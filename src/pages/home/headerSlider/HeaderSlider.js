import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import CircularLoader from '../../../customComponent/circularLoader/CircularLoader';
import './headerSlider.css';
import baseurl from '../../../utils/baseurl';

const HeaderSlider = () => {

    const [sliderData, setSlidetData] = useState([]);
    const [count, setCount] = useState(0);
    const timeOutRef = useRef(null)
    const baseUrl = baseurl();
    
    const resetTimeout = () => {
        if(timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
    }

    useEffect(() => {
        axios.get(`${baseUrl}slider/get-slider`)
        .then((data) => setSlidetData(data.data))
        .catch((error) => console.log(error.message))
    },[baseUrl]);

    useEffect(() => {
        resetTimeout();    
        timeOutRef.current = setTimeout(() => {
          if(count < 2) {
            setCount(count + 1)        
          }
          else {
            setCount(0);
          }
         
        }, 3000)
        
        return () => {
            resetTimeout();  
        }
        
      }, [count]); 

    return (
        <div id="header-slider" style={{backgroundImage: 'url("image/home-bg.jpg")'}}>
            {
                sliderData.length >= 1 ?
                    <div className="slider-container" style={{
                        position: 'relative',
                        top: '0',
                        right: count * 100 + '%',
                    }}>
                        {
                            sliderData.map((data) => (
                                <div className="slide" key={data._id}>
                                    <div className="slide-container">
                                        <div className="content">
                                            <span>{data.sliderTitle}</span>
                                            <h3>{data.offerRange}</h3>
                                            <button>Shop Now</button>
                                        </div>
                                        <div className="slide-image">
                                            <img src={`${baseUrl}${data.sliderImage}`} alt="current offer slider thumbnail" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <CircularLoader position="relative" height='100%' />    
            }            
        </div>
    );
};

export default HeaderSlider;