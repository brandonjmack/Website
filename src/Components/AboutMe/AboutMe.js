import React from 'react';
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div className="about-mainContainer">
            <div className="about-textBox">
                <h1 className="about-header"> About Me </h1>
                <p className="about-paragraph">
                    Hi, my name is Brandon and I am a fourth year computer science
                    student at the University of British Columbia Okanagan. During
                    my studies I have built a strong foundation in programming,
                    software development techniques, version control practices and
                    collaborative development environments.
                    <br/>
                    <br/>
                    I enjoy working on both front-end and back-end development
                    with a focus on creating user-friendly interfaces and improving
                    the overall user experience. My academics have provided me with
                    experience in web development, mobile applications, database
                    management, networking and software engineering principles.
                    <br/>
                    <br/>
                    I am excited about new technologies and want to explore new,
                    innovative solutions that arise from them. I am currently seeking
                    opportunities in fields such as cyber-security and software
                    development.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;