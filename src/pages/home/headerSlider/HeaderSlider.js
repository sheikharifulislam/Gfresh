import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import CircularLoader from '../../../customComponent/circularLoader/CircularLoader';
import './headerSlider.css';

const HeaderSlider = () => {

    const [sliderData, setSlidetData] = useState([]);
    const [count, setCount] = useState(0);
    const timeOutRef = useRef(null)
    
    const resetTimeout = () => {
        if(timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
    }

    useEffect(() => {
        axios.get('https://arcane-lake-20041.herokuapp.com/slider-data')
        .then((data) => setSlidetData(data.data))
        .catch((error) => console.log(error.message))
    },[]);

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
        <>
            <div id="header-slider" style={{backgroundImage: 'url("image/home-bg.jpg")'}}>
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
                                        <img src={`https://arcane-lake-20041.herokuapp.com/${data.sliderImage}`} alt="current offer slider thumbnail" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>            
            </div>
            {
                sliderData.length < 1 &&
                <CircularLoader position="relative" height='520px' />
            }
        </>
    );
};

export default HeaderSlider;