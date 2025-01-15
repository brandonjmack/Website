import React, {useState} from 'react';

import "./media.css";

const VideoPlayer = ({video}) => {

    const [showControls, setShowControls] = useState(false);

    return (
        <div
            className="video-container"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <video
                autoPlay={true}
                loop
                controls={showControls}
                className="video-player">
                <source src={video}/>
            </video>
        </div>
    )
};

export default VideoPlayer;