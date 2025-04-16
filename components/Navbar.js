"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuActive((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
            <div className="max-width">
                <div className="logo">
                    <a href="#">mitiwari<span>.in</span></a>
                </div>
                {/* Hamburger Menu Button */}
                <div className={`menu-toggle ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                {/* Navigation Links */}
                <ul className={`menu ${menuActive ? "active" : ""}`}>
                    {menuActive &&
                        <div onClick={closeMenu}>
                            <svg style={{ fill: "white", position: "absolute", top: "40px", right: "25px" }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                                <path d="M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z"></path>
                            </svg>
                        </div>
                    }
                    <li><a href="#home" className="menu-btn" onClick={closeMenu}><strong>Home</strong></a></li>
                    <li><a href="#about" className="menu-btn" onClick={closeMenu}><strong>About</strong></a></li>
                    <li><a href="#services" className="menu-btn" onClick={closeMenu}><strong>Services</strong></a></li>
                    <li><a href="#skills" className="menu-btn" onClick={closeMenu}><strong>Skills</strong></a></li>
                    <li><a href="#projects" className="menu-btn" onClick={closeMenu}><strong>Projects</strong></a></li>
                    <li><a href="#contact" className="menu-btn" onClick={closeMenu}><strong>Contact</strong></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
