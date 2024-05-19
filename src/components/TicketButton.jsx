import React from 'react';



// Set default props
TicketButton.defaultProps = {
  text: 'Tickets'  // Default text if none is provided
};

const ModLink = ({ text, href }) => {
  return (
      <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 rounded-lg p-2 font-bold hover:bg-gray-300 hover:cursor-pointer"
      >
          {text}
      </a>
  );
};
 
function TicketButton({ text }) {
    return (
        <ModLink
            text={text}
            href="https://tickets.hoemepage.com/event/lost-and-sound-hkyngk?useEmbed=true"
        />
    );
}

export default TicketButton;

