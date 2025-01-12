import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import Nameplate from "./Components/Nameplate/Nameplate";
import AboutMe from "./Components/AboutMe/AboutMe";
import Education from "./Components/Education/Education"
import Projects from "./Components/Projects/Projects";

const App = () => {
    return (

        <Router>
            <div className="flex flex-col">
                <Navbar/>
                <Nameplate/>
                <Routes>
                    <Route path="/" element={
                        <div>
                            <AboutMe/>
                            <Education/>
                            <Projects/>
                        </div>
                    }>
                    </Route>
                </Routes>
            </div>
        </Router>


)
    ;
};

export default App;