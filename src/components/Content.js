import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import Experience from './Experience';
import Expertise from './Expertise';
const content = () => {
    return (
        <div id="colorlib-main">
            <Home/>
            <About/>
            <Skills />
            <Education />
            <Experience />
            <Contact />
        </div>
    );
}
export default content;