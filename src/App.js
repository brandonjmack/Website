import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Nameplate from "./Components/Nameplate/Nameplate";
import AboutMe from "./Components/AboutMe/AboutMe";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/Contact/Contact";

const App = () => {
    return (
        <Router>
            <div className="flex flex-col">
                <Navbar />
                <Nameplate />
                <AboutMe />
                <Education />
                <Projects />
                <ContactMe />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>

                            </div>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;