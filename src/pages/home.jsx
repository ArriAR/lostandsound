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
import LaS from '../assets/info_page/info_pic.jpeg';
import GreatImage from '../assets/GreatImage.png';
import HeaderLaS from '../assets/header_LaS.png';
import FooterLaS from '../assets/footer_LaS.png';
import Stages from '../assets/ticket_assets/stages.png';
import Card from '../components/main_card';

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
                  <Card
                    color="rgb(71, 49, 112)"
                    image={Teamfoto}
                    headerText="Vision"
                    bodyText="Alles rund um unsere Vision und wie alles begann..."
                    text_color="rgb(255, 255, 255)"
                    link="/lostandsound/vision"
                    button_text="Zeig mir mehr!"
                  />
                </div>

                {/* Artist Magic */}

                <div className="flex items-center justify-center w-full h-40 bg-black">
                  <div className="section" ref={fadeRef}>
                    <div
                      className="js-text text-6xl p-4 font-bold min-h-24"
                      style = {{color: 'rgb(246, 95, 2)'}}
                      ref={captionRef}
                    ></div>
                  </div>
                </div>

                {/* Lineup */}

                <div>
                  <Card
                    color="rgb(234, 234, 234)"
                    image={LineUpCover}
                    headerText="Lineup"
                    bodyText="Hier lernst du all unsere Acts für dieses Jahr kennen."
                    text_color="rgb(0, 0, 0)"
                    link="/lostandsound/lineup"
                    button_text="Artists"
                  />
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
                  <Card
                    color="rgb(234, 234, 234)"
                    image={Stages}
                    headerText="Ticket Infos"
                    text_color="rgb(0, 0, 0)"
                    link="/lostandsound/tickets"
                    button_text="Ticket Infos"
                  />
                </div>


                {/* Additional Containers as needed */}
              </div>

              {/* Right Column */}
              <div className="space-y-4">

                {/* Workshops / Programm */}

                <div>
                  <Card
                    color="rgb(234, 234, 234)"
                    image={ProgrammCover}
                    headerText="Programm"
                    bodyText="Yoga, Graffiti, ein Tattoo oder Paneldiskussion? Schau dir hier unser Programm an."
                    text_color="rgb(0, 0, 0)"
                    link="/lostandsound/programm"
                    button_text="Programm"
                  />
                </div> 

                {/* Wichtige Infos */}

                <div>
                  <Card
                    color="rgb(246, 95, 2)"
                    image={LaS}
                    headerText="Wichtige Infos"
                    bodyText="Alles was du wissen musst"
                    text_color="rgb(255, 255, 255)"
                    link="/lostandsound/wichtige_infos"
                    button_text="Wichtige Infos"
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
                  
                {/* Location */}

                <div>
                  <Card
                    color="rgb(71, 49, 112)"
                    image={LocaCover}
                    headerText="Location"
                    text_color="rgb(255, 255, 255)"
                    link="/lostandsound/location"
                    button_text="Location & Anreise"
                  />
                </div>

                {/* Recap 2023 */}

                <div>
                  <Card
                    color="rgb(246, 95, 2)"
                    image={RecapCover}
                    headerText="Recap 2023"
                    bodyText="Hier findest du unseren Aftermovie und viele Bilder von Lost and Sound 2023"
                    text_color="rgb(255, 255, 255)"
                    link="/lostandsound/bilder"
                    button_text="Galerie"
                  />
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
  