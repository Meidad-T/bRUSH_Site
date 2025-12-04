import React from 'react';
import './Team.css';

const teamMembers = [
    { name: 'Meidad Troper', role: 'Co-Founder' },
    { name: 'Kelvin Mathew', role: 'Co-Founder' },
    { name: 'Vaidic Soni', role: 'Lead Developer' },
    { name: 'Priyanka Karki', role: 'Designer' },
    { name: 'Jesse Flynn', role: 'Marketing' },
];

const Team = () => {
    return (
        <section id="team" className="team">
            <div className="container">
                <h2 className="section-title">The Team</h2>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="team-avatar">
                                {member.name.charAt(0)}
                            </div>
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
