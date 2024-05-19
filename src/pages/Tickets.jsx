import React from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import { useState, useEffect, useRef } from 'react';
import FestivalCountdown from '../components/FestivalCountdown';
import SideNavigation from "../components/SideNavigation";
import "../index.css";
import TicketButton from '../components/TicketButton';
import Round from '../assets/location_assets/viele_leute_feiern.jpg';
import Stages from '../assets/ticket_assets/stages.png';
import Questions from '../assets/ticket_assets/questions.png';
import stage_one from '../assets/ticket_assets/stage_one.png';
import stage_two from '../assets/ticket_assets/stage_two.png';
import stage_three from '../assets/ticket_assets/stage_three.png';
import Info from '../assets/ticket_assets/stages_info.png';
import stage_eintag from '../assets/ticket_assets/stage_eintag.png';
import stage_dorf from '../assets/ticket_assets/stage_dorf.png';

const TicketsPage = ({ contentRef }) => {
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

                {/* Artist Magic */}

                <div className="flex items-center justify-center w-full h-40 bg-black">
                  <div className="section" ref={fadeRef}>
                    <div
                      className="js-text text-6xl p-4 text-yellow-300 font-bold min-h-24"
                      ref={captionRef}
                    ></div>
                  </div>
                </div>

                {/* Stages */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={Stages}
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
                    </main>
                  </div>
                </div> 

                {/* What you get! */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>What you get</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={Info}
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
                    </main>
                  </div>
                </div> 

                {/* Erste Stage */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                      <header className="text-detail flex justify-between">
                          <div>Hyper Goat</div>
                          <div>sold out</div>
                      </header>
                      <main className="space-y-3 lg:space-y-4">
                          <div className="relative overflow-hidden rounded-lg">
                              <img
                              src={stage_one}
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
                              <TicketButton text="Other Tickets"/>
                          </div>
                      </main>
                  </div>
              </div>

              {/* 2. Stage */}
              <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>Chillo Goat</div>
                        <div>97 €</div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={stage_two}
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
                            <TicketButton text="Get Stage 2"/>
                        </div>
                    </main>
                  </div>
                </div>
                

                {/* Additional Containers as needed */}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
              
              
              {/* Stage 3 */}
              <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                      <header className="text-detail flex justify-between">
                          <div>Hard-To-Goat</div>
                          <div>117 €</div>
                      </header>
                      <main className="space-y-3 lg:space-y-4">
                          <div className="relative overflow-hidden rounded-lg">
                              <img
                              src={stage_three}
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
                              <TicketButton text="Get Stage 3"/>
                          </div>
                      </main>
                  </div>
              </div>

                {/* Eintagsziegen */}
              <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>Eintagsziegen</div>
                        <div>58 €</div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={stage_eintag}
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
                            <TicketButton text="Zur Eintagsziege"/>
                        </div>
                    </main>
                  </div>
                </div>

                {/* Brodowiner Zicken */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>Brodowiner Zicken</div>
                        <div>39 €</div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={stage_dorf}
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
                            <TicketButton text="Zur Brodowiner Zicke"/>
                        </div>
                    </main>
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
            </div>    
          </div>
        </section>
      </div>
    </>
  );
};

export default TicketsPage;