import React, {useState} from 'react';

import arrow_left from "../../Images/Buttons/left_arrow.png";
import arrow_right from "../../Images/Buttons/right_arrow.png";

import "./media.css";

const Slideshow = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    };

    return (
        <div className="slide-container">
            <button onClick={handlePrevClick} className="slide-button">
                <img src={arrow_left} alt="Left Arrow" className="slide-arrow"/>
            </button>
            <img
                src={images[currentIndex]}
                alt="Images of the Application: Pass The Plate"
                className="slide-images"
            />
            <button onClick={handleNextClick} className='slide-button'>
                <img src={arrow_right} alt="Right Arrow" className="slide-arrow"/>
            </button>
        </div>
    )
};

export default Slideshow;

