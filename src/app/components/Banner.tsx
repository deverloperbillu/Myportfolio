"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import self from '../assets/images/banner-01.png';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.png';
import whatsapp from '../assets/images/whatsapp.png';
import atom from '../assets/images/react.png';
import wordpress from '../assets/images/wordpress.png';
import photoshop from '../assets/images/photoshop.png';
import Socialmedialink from './Enviroment/Socialmedialink';
import AOS from 'aos';

const Banner: React.FC = () => {
const words = ["Web Developer", "Professional Coder.", "Designer."];
const [currentText, setCurrentText] = useState("");
const [index, setIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [speed, setSpeed] = useState(150);

useEffect(() => {
const handleTyping = () => {
    if(charIndex === words[index].length && !isDeleting) {
        setIsDeleting(true);
        setSpeed(100);
        return;
    }

    if(charIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setSpeed(150);
        return;
    }

    const updateIndex = isDeleting ? charIndex - 1 : charIndex + 1;
    setCharIndex(updateIndex);
    setCurrentText(words[index].substring(0, updateIndex));
};

const typingTimeout = setTimeout(handleTyping, speed);
return () => clearTimeout(typingTimeout);
});

useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <>
        <div className='main_banner pt-36 px-[15px]'>
            <div className='mx-auto max-w-7xl'>
                <div className='grid grid-cols-2 items-center justify-items-end'>
                    <div className='banner_content'>
                        <div className='inner' data-aos="fade-up">
                            <span className='subtitle block uppercase text-sm font-medium text-[#c4cfde] mb-3.5'>Welcome to my world</span>
                            <h1 className='text-5xl text-white font-bold leading-tight mb-3.5'>Hi, I’m <span className='text-5xl text-[#ff014f]'>Syed Bilal Shahid</span>
                                <div className='type_text'>
                                    <span>{currentText}</span>
                                    <span className="blinking-cursor">|</span>
                                </div>
                            </h1>
                            <p className='text-sm text-[#c4cfde] mb-4'>I’m a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas.</p>
                            <div className='grid grid-cols-2 mt-5'>
                                <div className='social_media'>
                                <p>FIND WITH ME</p>
                                    <ul className='hero_icons list-insidelist-none p-0 inline-flex space-x-4 mt-5'>
                                        <li><a href={Socialmedialink[1].linkedinlink} data-aos="fade-down" data-aos-duration="1000" target="_blank" rel="noopener noreferrer"><Image src={linkedin} alt='Icons'/></a></li>
                                        <li><a href={Socialmedialink[2].githublink} data-aos="fade-down" data-aos-duration="1000" target="_blank" rel="noopener noreferrer"><Image src={github} alt='Icons'/></a></li>
                                        <li><a href={Socialmedialink[3].whatsapplink} data-aos="fade-down" data-aos-duration="1000" target="_blank" rel="noopener noreferrer"><Image src={whatsapp} alt='Icons'/></a></li>
                                    </ul>
                                </div>
                                <div className='social_media'>
                                <p>BEST SKILL ON</p>
                                    <ul className='hero_icons list-insidelist-none p-0 inline-flex space-x-4 mt-5'>
                                        <li><a href='#' data-aos="fade-down" data-aos-duration="1000"><Image src={atom} alt='Icons'/></a></li>
                                        <li><a href='#' data-aos="fade-down" data-aos-duration="1000"><Image src={wordpress} alt='Icons'/></a></li>
                                        <li><a href='#' data-aos="fade-down" data-aos-duration="1000"><Image src={photoshop} alt='Icons'/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='thumbnail'>
                        <div className='inner_imgs relative block max-w-lg mx-auto'>
                            <Image className='w-full max-w-md h-full mx-auto' data-aos="zoom-in-left" data-aos-duration="1000" src={self} alt={'My Self'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='line h-px w-full max-w-7xl my-14 mx-auto border-[#17191c] border-[1px] border-solid'></div>
    </>
  )
}

export default Banner
