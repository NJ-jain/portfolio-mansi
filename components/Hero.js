"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import PhotoRoom from "../public/22-PhotoRoom.png";
import Character from "../public/img_0005.svg"

const Hero = () => {
    const roles = useMemo(() => [
        "Web Developer",
        "App Developer",
        "Freelancer",
        "Tech Enthusiast",
        "MERN Stack Developer",
        "Full Stack Developer",
        "Next.js Developer"
    ], []);  // Wrapped in useMemo to prevent unnecessary re-renders

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 1000;

    useEffect(() => {
        const currentRole = roles[index];
        let timer;

        if (!isDeleting) {
            if (text.length < currentRole.length) {
                timer = setTimeout(() => {
                    setText(currentRole.slice(0, text.length + 1));
                }, typingSpeed);
            } else {
                timer = setTimeout(() => setIsDeleting(true), pauseTime);
            }
        } else {
            if (text.length > 0) {
                timer = setTimeout(() => {
                    setText(currentRole.slice(0, text.length - 1));
                }, deleteSpeed);
            } else {
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, index, roles]);

    return (
        <section className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Hello, This is</div>
                    <div className="text-2">Mansi Tiwari</div>
                    <div className="text-3">
                        And I&apos;m a <span className="role">{text}</span>
                        <span className="cursor">|</span>
                    </div>
                    <a href="#">Hire me</a>
                </div>
                
                <Image
                    id="home-image"
                    src={Character}
                    alt="Profile"
                    width={626}
                    height={626}
                />
            </div>
        </section>
    );
};

export default Hero;
