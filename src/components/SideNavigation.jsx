import React from 'react'
import { Link } from 'react-router-dom';

const ModLink = ({ text, href}) => {
  return (
    <a
        href={href}
        target="_blank" // Ensure the link opens in a new tab
        rel="noopener noreferrer" // Security feature for external links
        className="bg-gray-200 p-2 mr-2 mb-2 lg:rounded-xl rounded-lg hover:bg-gray-300"
      >
        {text}
      </a>
  );
}


const SideNavigation = () => {
  return (
    <div className="hidden lg:block absolute top-0 left-0 h-full md:w-64 md:h-full h-0 w-0 px-5">
      <div className="flex flex-wrap">
        <Link to="/lostandsound" className="bg-gray-200 p-2 mr-2 mb-2 lg:rounded-xl rounded-lg hover:bg-gray-300">Home</Link>
        <Link to="/lostandsound/location" className="bg-gray-200 p-2 mr-2 mb-2 lg:rounded-xl rounded-lg hover:bg-gray-300">Location</Link>
        <Link to="/lostandsound/lineup" className="bg-gray-200 p-2 mr-2 mb-2 lg:rounded-xl rounded-lg hover:bg-gray-300">Lineup</Link>
        <ModLink
          text = "Tickets" 
          href = "https://tickets.hoemepage.com/event/lost-and-sound-hkyngk?useEmbed=true"
        />
        <Link to="/lostandsound/wichtige_infos" className="bg-gray-200 p-2 mr-2 mb-2 lg:rounded-xl rounded-lg hover:bg-gray-300">Wichtige Infos</Link>
        <Link to="/lostandsound/merch" className="bg-red-200 p-2 mr-2 mb-2 lg:rounded-xl rounded-lg hover:bg-gray-300">Merch</Link>
        <Link to="/lostandsound/bilder" className="bg-red-200 p-2 mr-2 mb-2 lg:rounded-xl rounded-lg hover:bg-gray-300">Bilder</Link>
        <Link to="/lostandsound/programm" className="bg-red-200 p-2 mr-2 mb-2 lg:rounded-xl rounded-lg hover:bg-gray-300">Workshops</Link>
        <Link to="/lostandsound/ls23" className="bg-red-200 p-2 mr-2 mb-2 lg:rounded-xl rounded-lg hover:bg-gray-300">L&S 23</Link>
      </div>
    </div>
  )
}

export default SideNavigation;