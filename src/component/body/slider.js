import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slider = () => {
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slideshow-container">
            <div
                className="slideshow-wrapper"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={`./images/${image}`} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;