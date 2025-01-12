import React from 'react';
import "./Projects.css";

import ProjectData from "./ProjectData";
import ProjectBox from "./ProjectBox";

const Projects = () => {
    return (
        <div className="proj-mainContainer">
            <div className="proj-contentBox">
                <h1 className="proj-header">Projects</h1>
                <div className="proj-content">
                    {ProjectData.projects.map((project) => (
                        <ProjectBox
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            link={project.link}
                            mediaType={project.mediaType}
                            images={project.images}
                            video={project.video}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;