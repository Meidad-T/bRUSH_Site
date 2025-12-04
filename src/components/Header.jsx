import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo-container">
                    <img src="/assets/logo.png" alt="bRUSH" className="header-logo" />
                </div>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#team">Team</a>
                    <a href="https://github.com/Meidad-T/bRUSH" target="_blank" rel="noopener noreferrer" className="btn-small">GitHub</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
