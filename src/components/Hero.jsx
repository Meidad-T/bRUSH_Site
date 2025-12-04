import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1 className="tagline">
                        Life happens fast. <br />
                        <span className="highlight">
                            bRUSH it off.
                            <svg className="sketch-underline" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5,15 Q50,5 100,15 T195,10" fill="none" stroke="#FFD600" strokeWidth="5" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h1>
                    <p className="sub-tagline">
                        The Social Media app where you can truly express yourself.
                        <svg className="sketch-arrow" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10,10 Q50,40 90,10" fill="none" stroke="#2b2b2b" strokeWidth="2" strokeDasharray="5,5" />
                            <path d="M80,5 L90,10 L85,20" fill="none" stroke="#2b2b2b" strokeWidth="2" />
                        </svg>
                    </p>

                    <div className="cta-group">
                        <button className="btn">Rush to Learn More</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/assets/screenshot1.png" alt="bRUSH App Screenshot" className="app-screenshot" />
                    <div className="blob-bg"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
