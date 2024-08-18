import React , {useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({activeComponent , onNavClick}) => { 

    const [isButtonToggled,setButtonToggled] = useState(false);

    const navlinks = [
        { label: "Home" },
        { label: "Resume"},
        { label: "Portfolio" },
        { label: "contact" },
    ];

    const handleNavClick = (label) => {
        onNavClick(label);
        setButtonToggled(false);
    }

    return (
        <nav className={`navbar  ${isButtonToggled ? 'active' : ''}`} >
            <ul className="navbar-list">
                {!isButtonToggled && (
                    <li className="navbar-item active-item">
                        <span className="navbar-link active">{activeComponent}</span>
                    </li>
                )}
                {navlinks.map((navlink,index) => (
                    <li 
                        className="navbar-item"
                        key={navlink.label}
                    >
                        <button  
                            className={`navbar-link ${activeComponent === navlink.label ? 'active' : ''}`}
                            onClick={() => handleNavClick(navlink.label)}
                        >
                            {navlink.label}
                        </button>

                    </li>
                ))}
            </ul>

            
            <button className={`navbar-toggle ${isButtonToggled ? 'active' : ''}`}
              onClick={()=>setButtonToggled(!isButtonToggled)}
            >
                <FontAwesomeIcon icon={ faBars } /> 
            </button>
            
        </nav>
    );
};

export default Navbar;