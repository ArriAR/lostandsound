import bg_video from "../assets/websitebannerfinalV.mp4";
import React, { useState, useEffect, useRef } from "react";
import FestivalCountdown from "./FestivalCountdown.jsx";
import { Link, useNavigate } from 'react-router-dom';
import '../index.css'

const MenuItem = ({ text, href, to, onClick = "_self" }) => {
  // If an 'href' prop is provided, render an external link, otherwise render an internal Router Link.
  if (href) {
    return (
      <a
        href={href}
        target="_blank" // Ensure the link opens in a new tab
        rel="noopener noreferrer" // Security feature for external links
        className="opacity-90 pointer-events-auto flex h-full flex-1 items-center justify-center rounded-lg md:rounded-3xl md:py-edge md:hover:translate-y-6 hover:scale-90 ease-in-out duration-300 hover:bg-gray-900"
        style={{ background: 'rgb(71, 49, 112)', color: 'rgb(255, 255, 255)' }}
      >
        <span className="hero-text select-none text-[1rem] font-bold leading-[1em] md:translate-y-[-0.05em] md:text-[2.5rem] lg:text-[3rem] lg:leading-[1em] xl:text-[3.5rem] xl:leading-[1em] 2xl:text-[4.0rem] 2xl:leading-[1em]">
          {text}
        </span>
      </a>
    );
  } else {
    return (
      <Link
        to={to}
        onClick={onClick}
        className="bg-gray-300 opacity-90 pointer-events-auto flex h-full flex-1 items-center justify-center rounded-lg md:rounded-3xl md:py-edge md:hover:translate-y-6 hover:scale-90 ease-in-out duration-300 hover:bg-gray-100"
      >
        <span className="hero-text select-none text-[1rem] font-bold leading-[1em] md:translate-y-[-0.05em] md:text-[2.5rem] lg:text-[3.0rem] lg:leading-[1em] xl:text-[3.5rem] xl:leading-[1em] 2xl:text-[4.0rem] 2xl:leading-[1em]">
          {text}
        </span>
      </Link>
    );
  }
};


const Hero = ({scrollToContent}) => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  const handleClick = (to) => {
    navigate(to);
    setTimeout(scrollToContent, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const video = document.getElementById('hero-video');
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Automatic playback started!
          })
          .catch((error) => {
            // Auto-play was prevented
            console.error("Auto-play was prevented", error);
          });
      }
    }
  }, []);
  

  const headerStyle = {
    transform: `translateY(${-scrollY / 4.5}px)`, /* division is responsible for speed of header disappearance */
    transition: 'transform 0.3s ease-out',
  };

  return (
    <div className="relative">
   <header style={headerStyle} className="pointer-events-none fixed z-50 flex h-auto w-screen p-3 lg:p-4 xl:p-6">
      <nav className="pointer-events-none flex h-10 flex-1 items-stretch justify-between space-x-2 md:h-24 md:space-x-3 lg:h-28 lg:space-x-4 xl:h-32 xl:space-x-6 2xl:h-40">
         <div className="md:w-column">
          </div>
            <div className="pointer-events-none flex flex-1 items-center justify-center space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-6">
               <MenuItem text="L&S" to="/lostandsound/" onClick={() =>
               handleClick('/lostandsound/')} />
               <MenuItem
                  text="Tickets"
                  href="https://tickets.hoemepage.com/event/lost-and-sound-hkyngk?useEmbed=true"
                  />
               <MenuItem text="Location" to="/lostandsound/location" onClick={() =>
               handleClick('/lostandsound/location')} />
               <MenuItem text="Lineup" to="/lostandsound/lineup" onClick={() =>
               handleClick('/lostandsound/lineup')}/>
               <MenuItem text="Infos" to="/lostandsound/wichtige_infos" onClick={() =>
               handleClick('/lostandsound/wichtige_infos')}/>
            </div>
      </nav>
   </header>
   <video
      id="hero-video"
      autoPlay
      loop
      muted
      playsInline
      className="inset-0 w-full h-full"
    >
      <source src={bg_video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

</div>
  );
};

export default Hero;