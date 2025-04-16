"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import photo from "../public/photo.jpg";

const roles = ["Web Developer", "App Developer", "Freelancer", "Tech Enthusiast", "Mern Stack Developer", "Full Stack Developer", "Next Js Developer"];

const About = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100; // Typing speed in ms
    const deleteSpeed = 50; // Deleting speed in ms
    const pauseTime = 1000; // Pause time before deleting

    useEffect(() => {
        const currentRole = roles[index];
        let timer;

        if (!isDeleting) {
            // Typing effect
            if (text.length < currentRole.length) {
                timer = setTimeout(() => {
                    setText(currentRole.slice(0, text.length + 1));
                }, typingSpeed);
            } else {
                // Wait before deleting
                timer = setTimeout(() => setIsDeleting(true), pauseTime);
            }
        } else {
            // Deleting effect
            if (text.length > 0) {
                timer = setTimeout(() => {
                    setText(currentRole.slice(0, text.length - 1));
                }, deleteSpeed);
            } else {
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to next role
            }
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, index]);

    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About Me</h2>
                <div className="about-content">
                    <div className="column left">
                        <Image
                            id="about-image"
                            src={photo}
                            alt="Profile Image"
                            width={626}
                            height={626}
                        />
                    </div>
                    <div className="column right">
                        <div className="text">I&apos;m Mansi and I&apos;m a <span className="role">{text}</span><span className="cursor">|</span></div>
                        <p>Seeking an entry-level opportunity with an esteemed organization where I can utilize my skills &amp; enhance learning in the field of work. Capable of mastering new technologies.</p>
                        <br />
                        <div className="text">Why Work With Me</div>
                        <p>I&apos;m a great communicator &amp; love to invest the necessary time to understand the customer&apos;s problem very well.</p>
                        <a href="naman-resume.pdf" target="_blank" download="Naman-Jain-Resume">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
