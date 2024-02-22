import React, { useState, useEffect } from 'react';
import '../transitions/FadeIn.css'

const Header = () => {
    const [text, setText] = useState('');
    const fullText = "Hi, I'm Tamer";

    useEffect(() => {
        const typingInterval = setInterval(() => {
            const length = text.length;
            if (length === fullText.length) {
                clearInterval(typingInterval);
            } else {
                setText(fullText.substring(0, length + 1));
            }
        }, 100); // Adjust typing speed here

        return () => clearInterval(typingInterval);
    }, [text, fullText]);

    return (
        <div className="container mx-auto px-4" style={{ height: '75vh' }}>
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-5xl text-white font-bold mb-4">{text}</h1>
                <h2 className="text-lg text-white header-fade-in">Fullstack Developer & Graphic Designer</h2>
            </div>
        </div>
    );
};

export default Header;
