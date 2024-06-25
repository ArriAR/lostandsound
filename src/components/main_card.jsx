import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ color, image, headerText, bodyText, text_color, link, button_text }) => {
  return (
    <div>
      <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-white" style={{ background: color }}>

        <Link to={link} className="text-detail flex justify-between" style={{ color: text_color, fontSize: '3rem'}}>
        {headerText}
        </Link>
    
            
        <main className="space-y-3 lg:space-y-4">
          <div className="space-y-[1em]">
            <p className="text-default" style={{ color: text_color}}>
              {bodyText}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={image}
              alt=""
              loading="lazy"
              width="1920"
              height="1920"
              decoding="async"
              data-nimg="1"
              className="block w-full transition duration-300 object-contain"
              style={{ color: 'transparent', maxWidth: '100%', userSelect: 'none' }}
            />
          </div>
          <div className="text-detail !font-normal">
            <div className="text-detail !font-normal" style={{ color: text_color}}>
              <Link to={link} className="bg-gray-400 rounded-lg p-2 font-bold hover:bg-gray-300 hover:cursor-pointer">
                {button_text}
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Card;