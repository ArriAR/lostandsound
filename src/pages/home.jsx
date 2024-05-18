import React from 'react';
import bg_video from '../assets/aftermovie.mp4';
import Location from '../assets/location.png';
import Lineup from '../assets/lineup.png';
import LaS from '../assets/lost-and-sound.png';
import Round from '../assets/round.png';
import Recap from '../assets/recap.png';
import GreatImage from '../assets/GreatImage.png';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import { useState, useEffect, useRef } from 'react';
import FestivalCountdown from '../components/FestivalCountdown';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SideNavigation from "../components/SideNavigation";
import { Link } from 'react-router-dom';
import LocaCover from '../assets/location_assets/locationCOVER.png';
import LineUpCover from '../assets/artist_assets/lineup_cover.png';
import ProgrammCover from '../assets/programm_workshops/programmcover.png';
import Teamfoto from '../assets/teamfoto.png';
import RecapCover from '../assets/recap_page/recapCover.png';

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
            <div className="grid grid-auto-rows grid-cols-1 gap-4 mb-6 lg:ml-72 mx-4 mt-4 md:grid-auto-rows md:grid-cols-2">

              {/* Vision */}

              <div className="flex flex-row bg-purple-300 p-3 transition-transform transform-gpu hover:scale-105">
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                        <h3 className="box-text-title">Vision</h3>
                        <p className="box-text-content pr-4">Alles rund um unsere Vision und wie alles begann...</p>
                    </div>
                    <div className="flex justify-start">
                        <Link to="/lost-and-sound/vision" className="bg-gray-200 rounded-lg p-2 font-bold hover:bg-gray-300 hover:cursor-pointer">
                        Zeig mir mehr!</Link> 
                    </div>
                  </div>
                  <img
                    src={Teamfoto}
                    alt="Your Image Alt Text"
                    className="flex shrink max-h-48 max-w-48 rounded-md"
                    />
              </div>

              {/* Workshops */}

              <div className="flex flex-row bg-gray-200 p-3 transition-transform transform-gpu hover:scale-105">
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                        <h3 className="box-text-title">Programm</h3>
                        <p className="box-text-content pr-4">Yoga, Graffiti, ein Tattoo oder Paneldiskussion? Schau dir hier unser Programm an.</p>
                    </div>
                    <div className="flex justify-start">
                      <Link to="/lost-and-sound/programm" className="bg-gray-200 rounded-lg p-2 font-bold hover:bg-gray-300 hover:cursor-pointer">
                          Workshops & Programm
                      </Link>  
                    </div> 
                  </div>
                  <img
                    src={ProgrammCover}
                    alt="Your Image Alt Text"
                    className="max-h-48 max-w-48 rounded-md"
                    />
              </div>

              {/* Artist Shuffle */}

              <div className="flex items-center justify-center w-full h-full bg-black">
                  <div className="section" ref={fadeRef}>
                    <div
                        className="js-text text-6xl p-4 text-yellow-300 font-bold min-h-24"
                        ref={captionRef}
                        ></div>
                  </div>
              </div>

              {/* Wichtige Infos */}

              <div className="flex flex-row bg-orange-300 p-3 transition-transform transform-gpu hover:scale-105">
                  <img
                    src={LaS}
                    alt="Your Image Alt Text"
                    className="flex shrink max-h-48 max-w-48 rounded-md mr-2"
                    />
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                        <h3 className="box-text-title mb-2">Wichtige Infos</h3>
                        <p className="box-text-content pr-4">Alles was du wissen musst</p>
                    </div>
                    <div className="flex justify-end">
                      <Link to="/lost-and-sound/wichtige_infos" className="bg-gray-200 rounded-lg p-2 font-bold hover:bg-gray-300 hover:cursor-pointer">
                          Wichtige Infos
                      </Link> 
                    </div>
                  </div>
              </div>

              {/* Lineup */}

              <div className="flex flex-row bg-gray-200 p-3 transition-transform transform-gpu hover:scale-105">
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                        <h3 className="box-text-title mb-2">Lineup</h3>
                        <p className="box-text-content pr-4">Hier lernst du all unsere Acts für dieses Jahr kennen.</p>
                    </div>
                    <div className="flex justify-start">
                        <Link to="/lost-and-sound/lineup" className="bg-gray-200 rounded-lg p-2 font-bold hover:bg-gray-300 hover:cursor-pointer">
                        Artists</Link> 
                    </div>
                  </div>
                  <img
                    src={LineUpCover}
                    alt="Your Image Alt Text"
                    className="max-h-48 max-w-48 rounded-md"
                    />
              </div>

              {/* Bild */}

              <div className="flex items-center">
                  <img
                    src={GreatImage}
                    alt="Your Image Alt Text"
                    className=""
                    />
              </div>

              {/* Drehscheibe */}

              <div className="flex justify-center items-center">
                  <img
                    src={Round}
                    alt="Your Image Alt Text"
                    className="max-h-72 max-w-72 rounded-md animate-slow-spin"
                    />
              </div>

              {/* Location */}

              <div className="flex flex-row bg-purple-300 p-3 transition-transform transform-gpu hover:scale-105">
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                        <h3 className="box-text-title mb-2">Location</h3>
                        <p className="box-text-content pr-4">Deine Reise in den kollektiven, familiären Raum, frei von Konventionen.</p>
                    </div>
                    <div className="flex justify-start">
                        <Link to="/lost-and-sound/location" className="bg-gray-200 rounded-lg p-2 font-bold hover:bg-gray-300 hover:cursor-pointer">
                        Location & Anreise</Link> 
                    </div>
                  </div>
                  <img
                    src={LocaCover}
                    alt="Your Image Alt Text"
                    className="flex shrink max-h-48 max-w-48 rounded-md"
                    />
              </div>

              {/* Countdown */}

              <div className="flex flex-row bg-gray-500 justify-between">
                  <FestivalCountdown />
                  <div className="flex flex-col justify-end items-end">
                    <h2 className="flex flex-wrap text-8xl text-white text-center ">Tage </h2>
                    <h2 className="flex flex-wrap text-2xl text-white text-center">bis zum Festival </h2>
                  </div>
              </div>

              {/* Recap 2023 */}

              <div className="flex flex-row bg-orange-300 p-3 transition-transform transform-gpu hover:scale-105">
                  <img
                    src={RecapCover}
                    alt="Your Image Alt Text"
                    className="flex shrink max-h-48 max-w-48 rounded-md mr-2"
                    />
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                        <h3 className="box-text-title mb-2">Recap 2023</h3>
                        <p className="box-text-content pr-4">Hier findest du unseren Aftermovie und viele Bilder von Lost and Sound 2023</p>
                    </div>
                    <div className="flex justify-end">
                        <Link to="/lost-and-sound/bilder" className="bg-gray-200 rounded-lg p-2 font-bold hover:bg-gray-300 hover:cursor-pointer">
                        Galerie</Link> 
                    </div>
                  </div>
              </div>
            </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
  