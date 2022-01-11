import React, { useEffect, useState } from 'react';
import './imageGallery.css';

const ImageGallery = () => {

    const [imageData, setImageDta] = useState([]);
    useEffect(() => {
        fetch('/galleryData.json')
        .then((response) => response.json())
        .then((data) => setImageDta(data))
        .catch((error) => console.log(error.message));
    },[])

    return (
        <section id="gallery-section">
            <div className="container">
                <div className="image-gallery-title">
                    <h2>Our <span>Gallery</span></h2>
                    <hr />
                </div>
                <div className="gallery-content-container">
                    {
                        imageData.map((data) => (
                            <div className="single-gallery-content">
                                <div className="gallery-image">
                                    <img src={data.image} alt="" />
                                </div>
                                <div className="image-relevant-icons">
                                <a href="/#" className="fas fa-eye" />
                                <a href="/#" className="fas fa-heart" />
                                <a href="/#" className="fas fa-share-alt" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;