import React from 'react';

function TicketButton() {
    const ModLink = ({ text, href}) => {
        return (
          <a
              href={href}
              target="_blank" // Ensure the link opens in a new tab
              rel="noopener noreferrer" // Security feature for external links
              className="bg-gray-200 rounded-lg p-2 font-bold hover:bg-gray-300 hover:cursor-pointer"
            >
              {text}
            </a>
        );
      }

  return (
    <ModLink
      text = "Tickets"
      href = "https://tickets.hoemepage.com/event/lost-and-sound-hkyngk?useEmbed=true" 
    />
  );
}

export default TicketButton;
