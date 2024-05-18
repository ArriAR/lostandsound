import bg_video from "../assets/websitebannerfinalV.mp4";
import React, { useState, useEffect, useRef } from "react";
import FestivalCountdown from "./FestivalCountdown.jsx";
import { Link, useNavigate } from 'react-router-dom';

const MenuItem = ({ text, href, to, onClick = "_self" }) => {
  // If an 'href' prop is provided, render an external link, otherwise render an internal Router Link.
  if (href) {
    return (
      <a
        href={href}
        target="_blank" // Ensure the link opens in a new tab
        rel="noopener noreferrer" // Security feature for external links
        className="z-10 font-semibold md:hover:translate-y-6 hover:scale-90 ease-in-out duration-300 bg-gray-300 lg:p-6 md:p-4 p-4 my-4 md:ml-2 ml-1 rounded-2xl lg:text-6xl md:text-4xl text-xl opacity-75 hover:opacity-25 cursor-pointer"
      >
        {text}
      </a>
    );
  } else {
    return (
      <Link
        to={to}
        onClick={onClick}
        className="z-10 font-semibold md:hover:translate-y-6 hover:scale-90 ease-in-out duration-300 bg-gray-300 lg:p-6 md:p-4 p-4 my-4 md:ml-2 ml:1 rounded-2xl lg:text-6xl md:text-4xl text-xl opacity-75 hover:opacity-25 cursor-pointer"
      >
        {text}
      </Link>
    );
  }
};


const Hero = ({scrollToContent}) => {
  const navigate = useNavigate();

  const handleClick = (to) => {
    navigate(to); // Route ändern
    setTimeout(scrollToContent, 100); // Kurze Verzögerung, um sicherzustellen, dass der Inhalt geladen ist
  };

  return (
    <div className="relative">
    <video autoPlay loop muted className="inset-0 w-full h-full">
      <source
        src={bg_video} // Replace with the path to your video file
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

    <div className="absolute inset-0 bg-black opacity-50"></div>

    <div className="flex absolute inset-0 lg:flex md:flex flex-row justify-start items-start">
  <MenuItem text="🐐" to="/lost-and-sound/" onClick={() => handleClick('/lost-and-sound/')} />
  <MenuItem
    text="Tickets"
    href="https://tickets.hoemepage.com/event/lost-and-sound-hkyngk?useEmbed=true"
  />
  <MenuItem text="Location" to="/lost-and-sound/location" onClick={() => handleClick('/lost-and-sound/location')} />
  <MenuItem text="Lineup" to="/lost-and-sound/lineup" onClick={() => handleClick('/lost-and-sound/lineup')}/>
  <MenuItem text="Workshops" to="/lost-and-sound/programm" onClick={() => handleClick('/lost-and-sound/lineup')}/>
</div>




  </div>
  )
}

export default Hero