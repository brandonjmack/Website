import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Nameplate from "./Components/Nameplate/Nameplate";
import AboutMe from "./Components/AboutMe/AboutMe";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/Contact/Contact";

const App = () => {
    return (
        <Router basename="/Website">
            <div className="flex flex-col">
                <Navbar />
                <Nameplate />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <AboutMe />
                                <Education />
                                <Projects />
                                <ContactMe />
                            </div>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;