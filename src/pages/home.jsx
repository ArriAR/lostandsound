import React from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import { useState, useEffect, useRef } from 'react';
import FestivalCountdown from '../components/FestivalCountdown';
import SideNavigation from "../components/SideNavigation";
import "../index.css";
import TicketButton from '../components/TicketButton';
import Round from '../assets/location_assets/viele_leute_feiern.jpg';
import { Link } from 'react-router-dom';
import LocaCover from '../assets/location_assets/locationCOVER.png';
import LineUpCover from '../assets/artist_assets/lineup_cover.png';
import ProgrammCover from '../assets/programm_workshops/programmcover.png';
import Teamfoto from '../assets/teamfoto.png';
import RecapCover from '../assets/recap_page/recapCover.png';
import LaS from '../assets/lost-and-sound.png';
import GreatImage from '../assets/GreatImage.png';
import HeaderLaS from '../assets/header_LaS.png';
import FooterLaS from '../assets/footer_LaS.png';
import Stages from '../assets/ticket_assets/stages.png';

const HomePage = ({ contentRef }) => {
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

              {/* Bild */}

                <div className="flex items-center">
                    <img
                        src={HeaderLaS}
                        alt="Your Image Alt Text"
                        className=""
                        />
                </div>
                
                {/* Vision */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-white" style={{ background: 'rgb(71, 49, 112)'}}>
                    <header className="text-detail !text-white flex justify-between">
                        <div>Vision</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default !text-white">
                                Alles rund um unsere Vision und wie alles begann...
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={Teamfoto}
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
                            <div className="text-detail !font-normal !text-white">
                                <Link to="/lostandsound/vision" className="bg-gray-400 rounded-lg p-2 font-bold hover:bg-gray-300 hover:cursor-pointer">
                                Zeig mir mehr!</Link> 
                            </div> 
                        </div> 
                    </main>
                  </div>
                </div> 

                {/* Artist Magic */}

                <div className="flex items-center justify-center w-full h-40 bg-black">
                  <div className="section" ref={fadeRef}>
                    <div
                      className="js-text text-6xl p-4 text-yellow-300 font-bold min-h-24"
                      ref={captionRef}
                    ></div>
                  </div>
                </div>

                {/* Lineup */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)'}}>
                    <header className="text-detail flex justify-between">
                        <div>Lineup</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                                Hier lernst du all unsere Acts für dieses Jahr kennen.
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={LineUpCover}
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
                            <div className="flex justify-start">
                                <Link to="/lostandsound/lineup" className="bg-gray-300 rounded-lg p-2 font-bold hover:bg-gray-400 hover:cursor-pointer">
                                Artists</Link> 
                            </div>
                        </div> 
                    </main>
                  </div>
                </div> 

                {/* Drehscheibe */}
                
                <div className="flex justify-center items-center">
                  <div className="space-y-3 text-black lg:space-y-4" style={{ transform: 'none' }}>
                    <main className="space-y-3 lg:space-y-4">
                      <div
                        className="relative animate-spin overflow-hidden rounded-full"
                        style={{
                          animationDuration: '30s',
                          aspectRatio: '1 / 1',
                          animationDirection: 'reverse',
                        }}
                      >
                        <img
                          alt=""
                          loading="lazy"
                          width="1920"
                          height="1920"
                          decoding="async"
                          data-nimg="1"
                          className="block w-full transition duration-300 h-full w-full object-cover"
                          style={{ color: 'transparent', maxWidth: '100%', userSelect: 'none' }}
                          src={Round}
                        />
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

                {/* Tickets */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)'}}>
                    <header className="text-detail flex justify-between">
                        <div>Ticket Infos</div>
                        <div></div>
                    </header>
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
                        <div className="text-detail !font-normal">
                            <div className="flex justify-start">
                                <Link to="/lostandsound/tickets" className="bg-gray-300 rounded-lg p-2 font-bold hover:bg-gray-400 hover:cursor-pointer">
                                Ticket Infos</Link> 
                            </div>
                        </div> 
                    </main>
                  </div>
                </div>


                {/* Additional Containers as needed */}
              </div>

              {/* Right Column */}
              <div className="space-y-4">

                {/* Workshops / Programm */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black text-black" style={{ background: 'rgb(234, 234, 234)'}}>
                    <header className="text-detail flex justify-between">
                        <div>Programm</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                                Yoga, Graffiti, ein Tattoo oder Paneldiskussion? Schau dir hier unser Programm an.
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={ProgrammCover}
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
                            <div className="flex justify-end">
                                <Link to="/lostandsound/wichtige_infos" className="bg-gray-300 rounded-lg p-2 font-bold hover:bg-gray-400 hover:cursor-pointer">
                                    Programm
                                </Link> 
                            </div>
                        </div> 
                    </main>
                  </div>
                </div>

                {/* Wichtige Infos */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(246, 95, 2)'}}>
                    <header className="text-detail !text-white flex justify-between">
                        <div>Wichtige Infos</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default !text-white">
                                Alles was du wissen musst
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            opacity="20"
                            src={LaS}
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
                            <div className="flex justify-start">
                                <Link to="/lostandsound/wichtige_infos" className="bg-gray-400 rounded-lg p-2 font-bold text-white hover:bg-gray-300 hover:cursor-pointer">
                                Wichtige Infos
                                </Link> 
                            </div>
                        </div> 
                    </main>
                  </div>
                </div> 

                {/* Bild */}

                <div className="flex items-center">
                    <img
                        src={GreatImage}
                        alt="Your Image Alt Text"
                        className=""
                        />
                </div>
                  
                {/* Location */}

                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(71, 49, 112)'}}>
                    <header className="text-detail !text-white flex justify-between">
                        <div>Location</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default !text-white">
                                Deine Reise in den kollektiven, familiären Raum, frei von Konventionen.
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={LocaCover}
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
                            <div className="flex justify-start">
                                <Link to="/lostandsound/location" className="bg-gray-400 text-white rounded-lg p-2 font-bold hover:bg-gray-300 hover:cursor-pointer">
                                Location & Anreise</Link> 
                            </div> 
                        </div> 
                    </main>
                  </div>
                </div>

                {/* Recap 2023 */}

                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(246, 95, 2)'}}>
                    <header className="text-detail !text-white flex justify-between">
                        <div>Recap 2023</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default !text-white">
                                Hier findest du unseren Aftermovie und viele Bilder von Lost and Sound 2023
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={RecapCover}
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
                            <div className="flex justify-start">
                                <Link to="/lostandsound/bilder" className="bg-gray-400 rounded-lg p-2 text-white font-bold hover:bg-gray-300 hover:cursor-pointer">
                                Galerie</Link> 
                            </div>
                        </div> 
                    </main>
                  </div>
                </div>   


                {/* Additional Containers as needed */}
              </div>
            </div> 
            {/* Bild */}

            <div className="flex items-center pt-4 pb-4">
                    <img
                        src={FooterLaS}
                        alt="Your Image Alt Text"
                        className=""
                        />
                </div>   
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
  