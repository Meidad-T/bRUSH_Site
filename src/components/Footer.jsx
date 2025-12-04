import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">bRUSH</div>
                <div className="footer-links">
                    <a href="https://github.com/Meidad-T/bRUSH" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
                <div className="copyright">
                    &copy; {new Date().getFullYear()} bRUSH. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
