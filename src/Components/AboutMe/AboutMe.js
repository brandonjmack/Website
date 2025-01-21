import React from 'react';
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div id="about_me" className="about-mainContainer" >
            <div className="about-textBox">
                <h1 className="about-header"> About Me </h1>
                <p className="about-paragraph">
                   Hi! My name is Brandon and I am a recent graduate from the University of
                    British Columbia Okanagan with a BSc in Computer Science. Through my
                    academic journey I have developed skills in programming, collaboration,
                    software development methodologies and project management. Through my studies
                    I have established a diverse skill-set that spans both front-end and back-end
                    development, and I have learned to create software that is both functional and
                    user-centric.
                    <br/><br/>
                    I have been passionate about all things technology for as long as I can remember.
                    I am particularly interested in fields such as cybersecurity and software development,
                    but I am always open to new challenges and opportunities. I love working through
                    and solving complex problems, while delivering a solution that will have a meaningful
                    impact.
                    <br/><br/>
                    As I have now completed my studies I am seeking opportunities to apply and develop
                    my skills, learn from industry experts and contribute to projects that will be used
                    in the real-world. I am eager to join a company that prioritizes innovation and
                    a tight knit team. I am extremely excited to apply my skills, and bring my passion
                    for technology to a role where I can continue to develop and grow.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;