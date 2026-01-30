import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Servises from "./components/Servises";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import {Toaster} from 'react-hot-toast'
import Footer from "./components/Footer";


const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    return (
        <div className="dark:bg-black relative">
            <Toaster/>
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero />
            <TrustedBy />
            <Servises/>
            <OurWork/>
            <Teams/>
            <Contact/>
            <Footer theme={theme}/>
        </div>
    );
};

export default App;
