import React from 'react';
import "./Education.css";
import UBCLogo from "./Images/ubc_logo.png";

const Education = () => {
    const coursework = [
        "Human Computer Interaction",
        "Introduction to Databases",
        "Analysis of Algorithms",
        "Software Engineering",
        "Project Management",
        "Web Programming",

    ];

    return (
        <div id="education" className="edu-mainContainer">
            <div className="edu-textBox">
                <h1 className="edu-header">Education</h1>
                <img src={UBCLogo} alt="University of British Columbia Logo" className="edu-logo"/>
                <div className="edu-list">
                    <h3>Bachelor of Science in Computer Science</h3>
                    <h3>Graduation Date: December 2024</h3>
                    <br/>
                    <h3 className="edu-courses">Relevant Coursework</h3>
                    <div className="edu-list_items">
                        <div className="edu-table">
                            <div className="edu-table_body">
                                {coursework.map((course, index) => (
                                    <div key={index} className="edu-table_item">
                                        {course}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;