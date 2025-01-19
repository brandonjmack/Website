import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Nameplate from "./Components/Nameplate/Nameplate";
import AboutMe from "./Components/AboutMe/AboutMe";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/Contact/Contact";

const App = () => {
    return (
            <div className="flex flex-col">
                <Navbar />
                <Nameplate />
                <AboutMe />
                <Education />
                <Projects />
                <ContactMe />
            </div>
    );
};

export default App;