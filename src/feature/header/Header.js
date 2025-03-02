import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import minlogoImg from "../images/min-waylogo1.png";


const Header = () => {
    const headings = useSelector((state) => state.header.headings);
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav>
            <img src={minlogoImg} alt="Logo" className="mins-image" />
            
            <ul className={isDrawerOpen ? "nav-links open" : "nav-links"}>
                {headings.map((heading, index) => (
                    <li key={index}>{index === 0 ? null : heading}</li>
                ))}
            </ul>
            
            <div className="drawer-icon" onClick={toggleDrawer}>
                {isDrawerOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
};

export default Header;
