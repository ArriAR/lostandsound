import React from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import { useState, useEffect, useRef } from 'react';
import FestivalCountdown from '../components/FestivalCountdown';
import SideNavigation from "../components/SideNavigation";
import "../index.css";
import TicketButton from '../components/TicketButton';
import Round from '../assets/location_assets/viele_leute_feiern.jpg';
import LGnius from '../assets/artist_assets/artist_lgnius.png';
import Absteige from '../assets/artist_assets/artist_absteige.png';
import KendallWax from '../assets/artist_assets/artist_kendall_wax.png';
import MaxiAndrew from '../assets/artist_assets/artist_maxi_andrew.png';
import MrtiRakete from '../assets/artist_assets/artist_mrti_rakete.png';
import Spielkamerad from '../assets/artist_assets/artist_spielkamerad.png';
import Xime from '../assets/artist_assets/artist_xime.png';
import party from '../assets/artist_assets/bisschen_party.jpg';
import Vaennen from '../assets/artist_assets/artist_vaennen.png';


const LineupPage = ({}) => {
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

                {/* LGnius */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>💜LGNIUS🐐</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                            Harte zeiten brauchen härtere kicks. das ist die einstellung von luisa aka LGnius, die - angefangen mit underground raves in schweden - jetzt aber auch vermehrt ihren USB-stick & kopfhörer in süddeutschland und schon zum zweiten mal bei Lost & Sound in der tasche hat. mit dem nötigen groove und beats, die härter als die meisten herausforderungen des lebens sind, habt ihr eine unvergessliche nacht, die euch alles vergessen lässt.
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={LGnius}
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

                          {/* Mediaplayer */}

                          <div>
                            <iframe 
                              title="SoundCloud Player" 
                              style={{ width: '100%', height: '166px', border: 'none' }} 
                              scrolling="no" 
                              allow="autoplay" 
                              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1712962857&color=%23473170&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                            </iframe>
                            <div 
                              style={{ 
                                fontSize: '10px', 
                                color: '#cccccc', 
                                lineBreak: 'anywhere', 
                                wordBreak: 'normal', 
                                overflow: 'hidden', 
                                whiteSpace: 'nowrap', 
                                textOverflow: 'ellipsis', 
                                fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', 
                                fontWeight: '100'
                              }}>
                              <a 
                                href="https://soundcloud.com/lgnius" 
                                title="LGnius" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#cccccc', textDecoration: 'none' }}>
                                LGnius
                              </a> · 
                              <a 
                                href="https://soundcloud.com/lgnius/groove-around-find-out" 
                                title="groove around & find out" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#cccccc', textDecoration: 'none' }}>
                                groove around & find out
                              </a>
                            </div>
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

                {/* Absteige */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                      <header className="text-detail flex justify-between">
                          <div>💜ABSTEIGE🐐</div>
                          <div></div>
                      </header>
                      <main className="space-y-3 lg:space-y-4">
                          <div className="space-y-[1em]">
                              <p className="text-default">
                              Eine dunkle erscheinung steht im nebel und verführt mit süßen worten und lautem gesang. absteige bewegt sich musikalisch zwischen klassischer NNDW, gothic rock und electroclash. alles was von dunkelheit umhüllt ist, nennt sie ihr eigen.<br /><br />
                              </p>
                          </div>
                          <div className="relative overflow-hidden rounded-lg">
                              <img
                              src={Absteige}
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
                              {/* Mediaplayer */}
                            <div>
                              <iframe 
                                title="SoundCloud Player" 
                                style={{ width: '100%', height: '166px', border: 'none' }} 
                                scrolling="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1448651407&color=%23473170&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                              </iframe>
                              <div 
                                style={{ 
                                  fontSize: '10px', 
                                  color: '#cccccc', 
                                  lineBreak: 'anywhere', 
                                  wordBreak: 'normal', 
                                  overflow: 'hidden', 
                                  whiteSpace: 'nowrap', 
                                  textOverflow: 'ellipsis', 
                                  fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', 
                                  fontWeight: '100'
                                }}>
                                <a 
                                  href="https://soundcloud.com/absteige" 
                                  title="Absteige" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  style={{ color: '#cccccc', textDecoration: 'none' }}>
                                  Absteige
                                </a> · 
                                <a 
                                  href="https://soundcloud.com/absteige/tanz-mit-mir" 
                                  title="Tanz Mit Mir" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  style={{ color: '#cccccc', textDecoration: 'none' }}>
                                  Tanz Mit Mir
                                </a>
                              </div>
                            </div>
                          </div>
                      </main>
                  </div>
              </div>

              {/* MRTI und DJ Rakete */}
              <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                      <header className="text-detail flex justify-between">
                          <div>💜MRTI b2b DJ Rakete🐐</div>
                          <div></div>
                      </header>
                      <main className="space-y-3 lg:space-y-4">
                          <div className="space-y-[1em]">
                              <p className="text-default">
                              MRTI und DJ Rakete organisieren als residents des tatortkollektivs selbst events: das
                              motto ist bunt und euphorisch, es gibt keine genregrenzen. ihre Sets spiegeln die
                              vielfältigkeit elektronischer musik wider und können je nach stimmung und crowd zwischen
                              house, breaks und trance, sowie elementen von tribal, progressive und psy rangieren.
                              zusammen waren die beiden u.a. in der remise, humboldthain und auf dem traumtänzer
                              festival bei münchen zu gast.<br /><br />
                              </p>
                          </div>
                          <div className="relative overflow-hidden rounded-lg">
                              <img
                              src={MrtiRakete}
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

                            {/* Mediaplayer MRTI */}

                            <div>
                              <iframe 
                                title="SoundCloud Player for MRTI @ Sisyphos Wintergarten" 
                                style={{ width: '100%', height: '166px', border: 'none' }} 
                                scrolling="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1820994543&color=%23473170&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                              </iframe>
                              <div 
                                style={{ 
                                  fontSize: '10px', 
                                  color: '#cccccc', 
                                  lineBreak: 'anywhere', 
                                  wordBreak: 'normal', 
                                  overflow: 'hidden', 
                                  whiteSpace: 'nowrap', 
                                  textOverflow: 'ellipsis', 
                                  fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', 
                                  fontWeight: '100'
                                }}>
                                <a 
                                  href="https://soundcloud.com/mrtiparti" 
                                  title="MRTI" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  style={{ color: '#cccccc', textDecoration: 'none' }}>
                                  MRTI
                                </a> · 
                                <a 
                                  href="https://soundcloud.com/mrtiparti/mrti-sisyphos-wintergarten-090524" 
                                  title="MRTI @ Sisyphos Wintergarten | 09/05/24 🦆" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  style={{ color: '#cccccc', textDecoration: 'none' }}>
                                  MRTI @ Sisyphos Wintergarten | 09/05/24 🦆
                                </a>
                              </div>
                            </div>

                            {/* Mediaplayer DJ Rakete */}
                            <div>
                              <iframe 
                                title="SoundCloud Player for DJ Rakete" 
                                style={{ width: '100%', height: '166px', border: 'none' }} 
                                scrolling="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1579162503&color=%23473170&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                              </iframe>
                              <div 
                                style={{ 
                                  fontSize: '10px', 
                                  color: '#cccccc', 
                                  lineBreak: 'anywhere', 
                                  wordBreak: 'normal', 
                                  overflow: 'hidden', 
                                  whiteSpace: 'nowrap', 
                                  textOverflow: 'ellipsis', 
                                  fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', 
                                  fontWeight: '100'
                                }}>
                                <a 
                                  href="https://soundcloud.com/dj_rakete" 
                                  title="dj rakete" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  style={{ color: '#cccccc', textDecoration: 'none' }}>
                                  dj rakete
                                </a> · 
                                <a 
                                  href="https://soundcloud.com/dj_rakete/mrti-b2b-dj-rakete-traumtanzer-festival-2023" 
                                  title="MRTI b2b DJ RAKETE - Uferlos Stage | Traumtänzer Festival 2023" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  style={{ color: '#cccccc', textDecoration: 'none' }}>
                                  MRTI b2b DJ RAKETE - Uferlos Stage | Traumtänzer Festival 2023
                                </a>
                              </div>
                            </div>
                          </div>
                      </main>
                  </div>
              </div>


                {/* Xime */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>💜XIME🐐</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                            ist ein in berlin ansässiger dj und produzent, der sich voll und ganz der trance-musik widmet. sowohl in seinen sets als auch in seiner produktion strebt er danach, das genre in seiner vielfalt zu erfassen, indem er den klassischen trance-sound mit modernen elementen kombiniert. dabei begeistert ihn insbesondere die vielseitigkeit von goa, psy und progressive.<br /><br />
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={Xime}
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
                            {/* Mediaplayer */}

                          <div>
                            <iframe 
                              title="SoundCloud Player for XIME - Daydream Delusion" 
                              style={{ width: '100%', height: '166px', border: 'none' }} 
                              scrolling="no" 
                              allow="autoplay" 
                              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1761469518&color=%23473170&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                            </iframe>
                            <div 
                              style={{ 
                                fontSize: '10px', 
                                color: '#cccccc', 
                                lineBreak: 'anywhere', 
                                wordBreak: 'normal', 
                                overflow: 'hidden', 
                                whiteSpace: 'nowrap', 
                                textOverflow: 'ellipsis', 
                                fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', 
                                fontWeight: '100'
                              }}>
                              <a 
                                href="https://soundcloud.com/xime0" 
                                title="XIME" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#cccccc', textDecoration: 'none' }}>
                                XIME
                              </a> · 
                              <a 
                                href="https://soundcloud.com/xime0/daydream-delusion" 
                                title="Daydream Delusion" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#cccccc', textDecoration: 'none' }}>
                                Daydream Delusion
                              </a>
                            </div>
                          </div>
                        </div>
                    </main>
                  </div>
                </div>

                {/* Additional Containers as needed */}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Kendall Wax */}
                <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>💜Kendall Wax🐐</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                            Kendall Wax, your favorite kind of trip<br /><br />
                            Ek·s·ta·se, die: Ein Zustand der rauschhaften Heiterkeit und Begeisterung, in dem man sich vor allem bei einer Performance von Kendall Wax befindet. Mit ihrem umwerfenden Charme, ihren saftigen Dancemoves und ihrer mitreißenden Throat Goat-Energy sorgt die Berliner Drag Queen auch dieses Jahr wieder für eine noch größere und noch heißere Halftimeshow, die im Publikum eine Explosion voller ansteckender Lebensfreude und umweltschonendem Hedonismus auslöst. Noch nie hat sich Waxing so gut angefühlt.<br /><br />
                            Are you ready go get waxed?<br /><br />
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={KendallWax}
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
                          <a href="https://www.instagram.com/thekendallwax" target="_blank" rel="noopener noreferrer" className="bg-purple-300 rounded-lg p-2 font-bold hover:bg-purple-200 hover:cursor-pointer">
                            Instagram
                          </a> 
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
              
              {/* Maxi und Andrew */}
              <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>💜MAXI B2B ANDREW🐐</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                            aloha unsere trancenden freunde,<br /><br />
                            wir sind maxi & andrew, ihr könnt uns auch thunderbolts nennen.<br /><br />
                            wir sind vielfältig und schlagen wie ein blitz ein, wenn es darum geht eure hüften zum schwingen zu bringen. gemeinsam verbinden wir eine vielfalt an genres von hardtechno und trance über makina hinzu zu happy hardcore. mit uns werdet ihr eine musikalische reise erleben, die euch aus den socken haut, wir freuen uns am meisten über lachende gesichter, dann wissen wir, dass ihr auch spaß daran habt mit uns zeit zu verbringen.<br /><br />
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={MaxiAndrew}
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

                          {/* Mediaplayer Maxi */}
                          <div>
                            <iframe 
                              title="SoundCloud Player for Tb303 - Überlagerfeld" 
                              style={{ width: '100%', height: '166px', border: 'none' }} 
                              scrolling="no" 
                              allow="autoplay" 
                              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1671302781&color=%23473170&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                            </iframe>
                            <div 
                              style={{ 
                                fontSize: '10px', 
                                color: '#cccccc', 
                                lineBreak: 'anywhere', 
                                wordBreak: 'normal', 
                                overflow: 'hidden', 
                                whiteSpace: 'nowrap', 
                                textOverflow: 'ellipsis', 
                                fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', 
                                fontWeight: '100'
                              }}>
                              <a 
                                href="https://soundcloud.com/user-297058737" 
                                title="Tb303" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#cccccc', textDecoration: 'none' }}>
                                Tb303
                              </a> · 
                              <a 
                                href="https://soundcloud.com/user-297058737/rec-2023-11-21" 
                                title="Überlagerfeld" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#cccccc', textDecoration: 'none' }}>
                                Überlagerfeld
                              </a>
                            </div>
                          </div>

                          {/* Mediaplayer Andrew */}

                          <div>
                            <iframe 
                              title="SoundCloud Player for Kizu - I dreamed about you" 
                              style={{ width: '100%', height: '166px', border: 'none' }} 
                              scrolling="no" 
                              allow="autoplay" 
                              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1679686248&color=%23473170&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                            </iframe>
                            <div 
                              style={{ 
                                fontSize: '10px', 
                                color: '#cccccc', 
                                lineBreak: 'anywhere', 
                                wordBreak: 'normal', 
                                overflow: 'hidden', 
                                whiteSpace: 'nowrap', 
                                textOverflow: 'ellipsis', 
                                fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', 
                                fontWeight: '100'
                              }}>
                              <a 
                                href="https://soundcloud.com/kizuloge" 
                                title="Kizu" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#cccccc', textDecoration: 'none' }}>
                                Kizu
                              </a> · 
                              <a 
                                href="https://soundcloud.com/kizuloge/i-dreamed-about-you" 
                                title="I dreamed about you" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#cccccc', textDecoration: 'none' }}>
                                I dreamed about you
                              </a>
                            </div>
                          </div>
                        </div>

                    </main>
                  </div>
                </div>

                {/* Spielkamerad */}
              <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>💜Spielkamerad🐐</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                            der Spielkamerad aka bonzo bringt euch die volle ladung trash, trance und atzenpower.<br /><br />
                            der gründer, der halbtrocken exclusive crew, ist ready um das lost and sound ordentlich zum kochen zu bringen. sein sound bewegt sich irgendwo zwischen trance, electro & groove gepaart mit der vollen breitseite edits.<br /><br />
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={Spielkamerad}
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

                          {/* Mediaplayer */}
                          <div>
                            <iframe 
                              title="SoundCloud Player for ѕριєℓкαмєяα∂ at 𝔏𝔦𝔡𝔬𝔩𝔦𝔫𝔬" 
                              style={{ width: '100%', height: '166px', border: 'none' }} 
                              scrolling="no" 
                              allow="autoplay" 
                              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1259889535&color=%23473170&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                            </iframe>
                            <div 
                              style={{ 
                                fontSize: '10px', 
                                color: '#cccccc', 
                                lineBreak: 'anywhere', 
                                wordBreak: 'normal', 
                                overflow: 'hidden', 
                                whiteSpace: 'nowrap', 
                                textOverflow: 'ellipsis', 
                                fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', 
                                fontWeight: '100'
                              }}>
                              <a 
                                href="https://soundcloud.com/spielkameradhalbtrocken" 
                                title="ѕριєℓкαмєяα∂" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#cccccc', textDecoration: 'none' }}>
                                ѕριєℓкαмєяα∂
                              </a> · 
                              <a 
                                href="https://soundcloud.com/spielkameradhalbtrocken/lidolino" 
                                title="𝟚𝟘𝟚𝟚/𝟘𝟜/𝟚𝟡 @ 𝔏𝔦𝔡𝔬𝔩𝔦𝔫𝔬" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: '#cccccc', textDecoration: 'none' }}>
                                𝟚𝟘𝟚𝟚/𝟘𝟜/𝟚𝟡 @ 𝔏𝔦𝔡𝔬𝔩𝔦𝔫𝔬
                              </a>
                            </div>
                          </div>
                        </div>
                    </main>
                  </div>
                </div>

                {/* Vaennen */}
              <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>💜Vännen🐐</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                            vännen is your dear friend where you just know they'd somehow survive an alien invasion. their sets speak the martian language of fast-paced scanditek influenced by trance, psy and whatever lurks in the darkness of the woods, infecting dancefloors with a transcendental force that leaves you with the strange feeling that something is just a little bit off...<br /><br /> 
                            they have been sticking around Kiel's techno scene for as long as they can remember (just a few centuries) and just recently co-founded the DJ collective fae tribe. The goal being: the psitekification of a nation, eternal love and returning back home to outerspace. Enter the Strudel.<br /><br />
                            </p>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                            src={Vaennen}
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

                          <a href="https://soundcloud.com/computrrhrz" target="_blank" rel="noopener noreferrer" className="bg-purple-300 rounded-lg p-2 font-bold hover:bg-purple-200 hover:cursor-pointer">
                            Soundcloud
                          </a> 
                          
                        </div>
                    </main>
                  </div>
                </div>
                
                {/* Instagram */}
              <div>
                  <div className="space-y-3 p-3 lg:space-y-4 lg:p-4 text-black" style={{ background: 'rgb(234, 234, 234)', transform: 'none' }}>
                    <header className="text-detail flex justify-between">
                        <div>More to be announced soon!</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                              Die neusten Künstler:Innen Announcements findest du auf unserem Instagram!<br /><br />
                            </p>
                        </div>
                        <div className="text-detail !font-normal">
                          <a href="https://www.instagram.com/lostandsound.festival" target="_blank" rel="noopener noreferrer" className="bg-purple-300 rounded-lg p-2 font-bold hover:bg-purple-200 hover:cursor-pointer">
                            Instagram
                          </a> 
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
                          animationDirection: 'normal',
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
                          src={party}
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

export default LineupPage;
