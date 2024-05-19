import React from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import { useState, useEffect, useRef } from 'react';
import FestivalCountdown from '../components/FestivalCountdown';
import SideNavigation from "../components/SideNavigation";
import "../index.css";
import TicketButton from '../components/TicketButton';
import LocaCover from '../assets/location_assets/locationCOVER.png';
import Round from '../assets/location_assets/viele_leute_feiern.jpg';
import Fruehstueck from '../assets/info_page/fruehstueck_leute.jpeg';
import Natur from '../assets/location_assets/natur_chillen.jpeg';
import Bar from '../assets/info_page/bar_frtasse.png';

const InfoPage = ({ contentRef }) => {
  return (
    <>
      <div className="relative">
        <SideNavigation />
        <section id="sectionToScrollTo" ref={contentRef}>
          <div className="max-w-full mx-auto px-4 mb-6 lg:ml-72 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Introduction */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>Wichtige Infos</div>
                        <div>30.08. - 01.09.2024</div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                              Alles was du wissen musst!
                            </p>
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

                {/* Verpflegung */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                      <header className="text-detail flex justify-between">
                          <div>Verpflegung</div>
                          <div></div>
                      </header>
                      <main className="space-y-3 lg:space-y-4">
                          <div className="space-y-[1em]">
                              <p className="text-default">
                                Gutes (Bio)-Essen macht glücklich und stärkt die Gemeinschaft. Unsere Begegnungen und Gespräche beginnen morgens, beim gemeinsamen Frühstück. Im Ticketpreis ist sowohl Samstag als auch Sonntag das Frühstück enthalten: Bio, vegetarisch/vegan und direkt aus dem Ökodorf Brodowin.<br /><br />
                                Mittags und Abends wird es Essensstände geben, bei welchen zu fairen Preisen lokales Essen verkauft wird. Bitte beachtet: Campingkocher sind NICHT erlaubt! Wir befinden uns im Biosphärenreservat Schorfheide Chorin und es besteht Brandgefahr.<br /><br />
                                Wenn zwischendurch der kleine Hunger zuschlägt, müsst ihr selbst für Snacks und Essen sorgen. Also denkt daran, trotzdem Proviant mitzubringen.<br /><br />  
                                Wir wollen das Festival umweltfreundlich gestalten. Deshalb bitten wir euch, euer eigenes Geschirr, Besteck und Becher mitzubringen. Wir können kein Geschirr für Essen und Getränke vor Ort austeilen. Jeder kann seinen dreckigen Teller hinterher selbst an unserer Abwaschstation spülen.<br /><br />
                              </p>
                          </div>
                          <div className="relative overflow-hidden rounded-lg">
                              <img
                              src={Fruehstueck}
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

              

                {/* Additional Containers as needed */}
              </div>

              {/* Right Column */}
              <div className="space-y-4">

                {/* Festival Countdown */}
                <div className="flex flex-col bg-gray-500 justify-between">
                  <FestivalCountdown />
                  <div className="flex flex-col justify-end items-end">
                    <h2 className="flex flex-wrap text-8xl text-white text-center">Tage</h2>
                    <h2 className="flex flex-wrap text-2xl text-white text-center">bis zum Festival</h2>
                  </div>
                </div>           

                {/* Getränke */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>Getränke</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                                Wir haben eine Bar mit fairen Preisen! Ihr könnt bei uns leckere Getränke wie Bier, Limo und Shots kaufen. Durstig wird am Ende niemand mehr sein.<br /><br /> 
                                Indem ihr eure Getränke an der Bar kauft, unterstützt ihr das Festival direkt und helft uns dabei, das bestmögliche Lost And Sound für alle zu gestalten!<br /><br /> 
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={Bar}
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

              {/* Waschstation */}

              <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>Waschstation</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                            Es wird mehrere Trinkwasser & Abwaschstationen auf dem Gelände geben. Dort könnt ihr euer mitgebrachtes Geschirr, Besteck und Becher waschen.<br /><br />
                            </p>
                        </div>
                        
                    </main>
                  </div>
                </div> 

                {/* Duschen */}

              <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>Duschen</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                                Rustikal & Cold as Ice - Wir versuchen uns an unserer eigenen Dusch-Konstruktion.<br /><br /> 
                                Alternativ:<br /><br />
                                Back to the basics - ab in den See. Auffrischen könnt ihr euch auch beim Baden in den sieben Seen in Brodowin.<br /><br />
                            </p>
                        </div>
                        
                    </main>
                  </div>
                </div>   

                {/* Ausrüstung */}

                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>Ausrüstung</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                            Brandenburgisches Land zieht nicht nur BerlinerInnen, sondern auch Scharen an wilden Mückenschwärmen an. Denkt an Mückenspray, feste Schuhe und warme Pullis für abends. Im Falle von Regen: Gummistiefel! Wir sind Mitten auf dem Land<br /><br />
                            </p>
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

export default InfoPage;