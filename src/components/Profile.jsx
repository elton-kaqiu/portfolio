import React from 'react';
import profileImg from '../assets/git.JPG';
import './Profile.scss'; // Import SCSS file
import cv from "../assets/Elton Kaqiu - CV.pdf"

export const Profile = () => {
    const handleOnClick = () => {
        const link = document.createElement('a');
        link.href = cv;
        link.download='Elton Kaqiu - CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <section className="profile">
            <article className="profile-info">
                <h1>
                    Hello, I'm Elton,
                    <br/>
                    <span className="highlight">Software</span>
                    <br/>
                    <span className="highlight">Developer</span>
                    <br/>
                    based in Prishtina.
                </h1>
                <button className="resume-btn" onClick={handleOnClick}>Resume</button>
            </article>
            <article className="profile-img">
                <img src={profileImg} alt="Profile"/>
            </article>
        </section>
    );
};
