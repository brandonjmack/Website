import React from 'react';

import "./media.css";

const VideoPlayer = ({video}) => {
    return (
        <div>
            src={video}
            controls
        </div>
    )
};

export default VideoPlayer;