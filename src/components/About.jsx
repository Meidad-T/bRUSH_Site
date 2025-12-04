import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">What is bRUSH?</h2>
                <div className="about-content">
                    <p>
                        bRUSH is a brand new social media that creates a space for users to express their creativity!
                        Each day, every user gets the same prompt for an absurd, funny, or really fun concept which they have to draw and submit within the time limit.
                    </p>
                    <p>
                        Users then head on to the feed, which is where they see their friends' art for the same prompt, and get to award medals!
                        Each user is given one gold, one silver, and one bronze medal per day, and can award them to their favorite drawings,
                        so you better be the best to earn those awards!!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
