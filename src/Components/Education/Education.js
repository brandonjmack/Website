import React from 'react';
import "./Education.css";
import UBCLogo from "./Images/ubc_logo.png"

const Education = () => {
    return (
        <div className="edu-mainContainer">
            <div className="edu-textBox">
                <h1 className="edu-header">Education</h1>
                <img src={UBCLogo} alt="University of British Columbia Logo" className="edu-logo"/>
                <ul className="edu-list">
                    <h3> Bachelor of Science in Computer Science </h3>
                    <h3> Graduation Date: December 2024 </h3>
                    <br/>
                    <h2>Relevant Coursework</h2>
                    <li>Software Engineering (COSC 310)</li>
                    <li>Analysis of Algorithms (COSC 320)</li>
                    <li>Introduction to Databases (COSC 304)</li>
                    <li>Advanced Computer Human Interaction (COSC 441)</li>
                    <li>Project Management (COSC 305)</li>
                </ul>
            </div>
        </div>
    );
};

export default Education;