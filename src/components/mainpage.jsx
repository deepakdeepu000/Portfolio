import Navbar from './Navs/NavBar';
import SideBar from './Navs/sidebar';
import HomeComponent from './Pages/Home';
import ResumeComponent from './Pages/Resume';
import ProjectComponent from './Pages/Projects';
import ContactComponent from './Pages/Contact';

import { useState } from 'react';

const Main = () => {
    const [activeComponent, setActiveComponent] = useState("Home");

    const handleNavClick = (label) => {
        setActiveComponent(label);
    };

    return (
        <main>
            <SideBar />
            <div className="main-container">
                <Navbar activeComponent={activeComponent} onNavClick={handleNavClick} />
                    {activeComponent === "Home" && <HomeComponent />}
                    {activeComponent === "Resume" && <ResumeComponent />}
                    {activeComponent === "Portfolio" && <ProjectComponent />}
                    {activeComponent === "contact" && <ContactComponent />} 
            </div>
        </main>
    );
};

export default Main;