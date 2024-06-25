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
import TasseZeltet from '../assets/location_assets/zeltplatz_mit_tasse.jpg';
import Natur from '../assets/location_assets/natur_chillen.jpeg';
import TreckerShuttle from '../assets/location_assets/trecker_shuttle.jpeg';

const LocationPage = ({}) => {

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
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
                {/* Introduction */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex flex-col justify-between" style = {{fontSize: '2rem'}}>
                        <div>Location & Anreise</div>
                        <div>30.08. - 01.09.2024</div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                            
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

              {/* Anreise und Abreise */}

              <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div></div>
                        <div>Anreise & Abreise</div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-detail">
                              Mit Zug
                            </p>
                            <p className="text-default">
                            Berlin Hbf nach Bhf. Chorin
                            RE3 nach Stralsund<br /><br />
                            Mit den öffentlichen Verkehrsmitteln könnt ihr in nur 45 Minuten von Berlin den Bahnhof Chorin in Brandenburg erreichen. Dort wird euch am Freitag unser Trecker-Shuttle abholen und am Sonntag wieder zurückbringen. Die genauen Abholzeiten für den Trecker-Shuttle geben wir noch rechtzeitig bekannt. Für die Abenteurer unter euch, die lieber auf zwei Rädern unterwegs sind, könnt ihr das Gelände auch in 30 Minuten mit dem Fahrrad von Chorin aus erreichen.<br /><br />
                            </p>
                            <p className="text-detail">
                              Mit Auto
                            </p>
                            <p className="text-default">
                            Brodowin liegt etwa eine Stunde nordöstlich von Berlin entfernt. Parkplätze gibt es vor Ort auf dem Festivalgelände. Es wird eine Parkplatzgebühr von 10€ / Auto erhoben. Die Adresse ist Weißensee 1, 16230 Chorin OT Brodowin.<br /><br />
                            Aufgepasst: Vorsicht bei Anreise über Senftenhütte! Der Waldweg dort ist ziemlich rough und sollten euch eure Ölwanne oder eure Achsen lieb sein, überlegt den etwas längeren Umweg zu fahren.<br /><br />
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={TreckerShuttle}
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

                {/* Naturschutz & Nachhaltigkeit */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>Naturschutz & Nachhatligkeit</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                              Lost and Sound ist umringt von Wald, Wiese und See. Unsere Soundfabrik liegt am Rande Brodowins, einem Dorf inmitten des Biosphärenreservats Schorfheide-Chorins, welches sich seit Jahrzehnten der ökologischen Landwirtschaft verschrieben hat. Der Demeterhof “Ökodorf Brodowin” stellt uns das Gelände für das Festival.<br /><br />
                              Eine zukunftsgerichtete Festivalkultur muss in unseren Augen nachhaltig sein. Wir arbeiten eng mit dem Biohof zusammen und bieten ausschließlich regionales Bio-Essen an. Wir versuchen nicht nur eine neue Gemeinschaft zu bilden, sondern als solche auch einen Mehrwert für die Region darzustellen. Im Rahmen des Festivals planen wir eine Müll-Sammel-Aktion im Dorf, der ihr euch gerne anschließen könnt.<br /><br /> 
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={Natur}
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

                {/* Zeltplatz */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                      <header className="text-detail flex justify-between">
                          <div>Campingplatz</div>
                          <div></div>
                      </header>
                      <main className="space-y-3 lg:space-y-4">
                          <div className="space-y-[1em]">
                              <p className="text-default">
                              Wenn es an der Zeit ist, die müden Festival-Füße auszuruhen, dann könnt ihr euch auf unserem grünen Zeltplatz direkt am Wald entspannen. Er ist nicht weit vom Festivalgelände entfernt, Ohrstöpsel sind daher das A&O unserer Schönheitsschläfer. Für die Camper und Wohnwagen-Fans unter euch gibt es Stellplätze. Bitte beachtet, dass es dort keinen Strom- und Abwasseranschluss gibt.<br /><br />
                              </p>
                          </div>
                          <div className="relative overflow-hidden rounded-lg">
                              <img
                              src={TasseZeltet}
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
            </div>    
          </div>
        </section>
      </div>
    </>
  );
};

export default LocationPage;