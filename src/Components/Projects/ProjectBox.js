import React from 'react';

import Slideshow from "../Media/Slideshow";
import VideoPlayer from "../Media/VideoPlayer";

import "./Projects.css"

const ProjectBox = ({title, description, technologies, link, mediaType, images, video}) => {
    return(
        <div className="box-container">
            <h2 className="box-header">{title}</h2>

            {mediaType === "images" && <Slideshow images={images}/>}
            {mediaType === "video" && <VideoPlayer video={video}/>}

            <p className="box-paragraph">{description}</p>
            <ul>
                {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a href={link} className="box-link"> View Project on GitHub</a>
        </div>
    )
}

export default ProjectBox;