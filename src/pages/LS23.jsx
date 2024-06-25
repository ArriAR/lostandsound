import React from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import { useState, useEffect, useRef } from 'react';
import FestivalCountdown from '../components/FestivalCountdown';
import SideNavigation from "../components/SideNavigation";
import "../index.css";
import { Link } from 'react-router-dom';
import Logo from '../assets/logoandsound.svg'
import TicketButton from '../components/TicketButton';

const LS23Page = ({}) => {
  gsap.registerPlugin(TextPlugin);

  const fadeRef = useRef(null);
  const captionRef = useRef(null);
  const sortiment = [
    { text: "LGnius" },
    { text: "Xime" },
    { text: "Absteige" },
    { text: "Spielkamerad" },
    { text: "Kendall Wax" },
    { text: "Maxi & Andrew" },
    { text: "MRTI & DJ Rakete" },
    { text: "Lost & Sound 2024" },
  ];
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  useEffect(() => {

      const fade = fadeRef.current;
      const caption = captionRef.current;
      const tl = gsap.timeline({
        repeat: -1,
      });

      for (let i = 0; i < sortiment.length; i++) {
        tl.to(fade, { duration: 0.3 });
        if (i) {
          tl.fromTo(
            caption,
            { text: sortiment[i - 1].text, opacity: 0 },
            { text: "", opacity: 1, ease: "none" },
            "<"
          )
            .to(caption, { text: sortiment[i].text, duration: 2, opacity: 1 })
            .to(caption, { duration: 2, opacity: 1 });
        } else {
          tl.fromTo(
            caption,
            { text: sortiment[sortiment.length - 1].text, opacity: 0 },
            { text: "", opacity: 1 },
            "<"
          )
            .to(caption, { text: sortiment[i].text, duration: 3.5, opacity: 1 })
            .to(caption, { duration: 2, opacity: 1 });
        }
      }
    
  }, []);

  return (
    <>
    <div className="relative">
      <SideNavigation />
      <section id="sectionToScrollTo" ref={contentRef}>
        <div className="max-w-full mx-auto px-4 mb-6 lg:ml-72 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-center w-full h-40 bg-black">
                <div className="section" ref={fadeRef}>
                  <div
                    className="js-text text-6xl p-4 text-yellow-300 font-bold min-h-24"
                    ref={captionRef}
                    style = {{color: 'rgb(246, 95, 2)'}}
                  ></div>
                </div>
              </div>

               {/* Festival Countdown */}
               <div className="flex flex-col bg-gray-500 justify-between">
                <FestivalCountdown />
                <div className="flex flex-col justify-end items-end">
                  <h2 className="flex flex-wrap text-8xl text-white text-center">Tage</h2>
                  <h2 className="flex flex-wrap text-2xl text-white text-center">bis zum Festival</h2>
                </div>
              </div>   

              {/* Additional Containers as needed */}
            </div>

            {/* Right Column */}
            <div className="space-y-4">

              {/* Introduction */}
              <div>
                <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                  <header className="text-detail flex justify-between">
                      <div>Hier kommt bald was</div>
                      <div></div>
                  </header>
                  <main className="space-y-3 lg:space-y-4">
                      <div className="space-y-[1em]">
                          <p className="text-default">
                            Schau bald nochmal vorbei!
                          </p>
                      </div>
                      <div className="relative overflow-hidden rounded-lg">
                          <img
                          src={Logo}
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
                          <TicketButton />
                      </div> 
                  </main>
                </div>
              </div>

                     

              {/* Additional Containers as needed */}
            </div>
          </div>    
        </div>
      </section>
    </div>
  </>
  );
};

export default LS23Page;