import React from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import { useState, useEffect, useRef } from 'react';
import FestivalCountdown from '../components/FestivalCountdown';
import SideNavigation from "../components/SideNavigation";
import "../index.css";
import TicketButton from '../components/TicketButton';
import Recap from "../assets/recap.png";
import Teamfoto from '../assets/teamfoto.png';


const VisionPage = () => {

  return (
    <>
      <div className="relative">
        <SideNavigation />
        <section id="sectionToScrollTo">
          <div className="grid grid-cols-1 gap-4 mb-6 lg:ml-72 mx-4 mt-4">

            <div>
                <div className="bg-purple-300 space-y-3 p-3 lg:space-y-4 lg:p-4 text-black">
                    <header className="text-detail flex justify-between">
                        <div>Vision</div>
                        <div></div>
                    </header>
                    <main className="space-y-3 lg:space-y-4">
                        <div className="space-y-[1em]">
                            <p className="text-default">
                            Ein verschwommenes Bild, geteilte Gedanken, eine gemeinsame Idee, die letztlich in einer Vision mündeten. Der Vision eines Festivals als einen kollektiven, familiären Raum, frei von Konventionen. Einem Space, in dem sich jede Person auf eine Suche begeben kann: eine Suche nach Erfahrungen, Erkenntnissen, Momenten, Antworten, Fragen, Begegnungen, Wörtern, Lauten, Farben, oder auch einfach nach einer bestimmten Musik.<br /><br />
                        Wir glauben, dass Kunst auf tiefsten Ebenen verbindet. Und was wir hier in Brodowin verbinden, das sind Kulturraum mit Natur, Stadtflair mit Landluft, musikalische Erfahrung mit Gemeinschaftswesen.<br /><br />
                        2023 fand dieser gemeinschaftliche Freudentaumel zum ersten Mal statt. Er war das Ergebnis der gebündelten Mühen einer kleinen Gruppe von FreundInnen mit dem einzigen Ziel, diese Vision zu teilen. Wir verstehen uns hierbei nicht nur als VeranstalterInnen, sondern vielmehr als KuratorInnen mit dem Ziel, die passende Umgebung für die Realisation einer Gemeinschaft zu schaffen, der nicht purer individualistischer Erfahrungskonsum, sondern vor allem die Pflege einer süßen, inspirativen, kreativen Community am Herzen liegt.<br /><br />
                        Wir möchten eine unkommerzielle, umweltfreundliche und gemeinnützig orientierte Atmosphäre schaffen, die Inspiration durch Interaktion anregt: gemeinsames Lost-Sein ist unser Ritual, und guter Sound ist dabei zentral!<br /><br />
                        Verloren in dem Sound, der uns umschwirrt, elektrisieren wir uns gegenseitig im Rhythmus der Musik, wabern als Bläschen durch die Luft, bis uns die Schallwellen durcheinandergewirbelt und wieder zu einem neuen Ganzen zusammengesetzt haben. Wir sind so leicht, und doch unzertrennbar in unserer unablässigen Suche, die uns immer wieder zerspringen und auseinanderwirren lässt, nur um ekstatisch aufgeladen wieder aufeinanderzutreffen. Als symbiotisch umgruppierte Muster aus zukunftsfrohen Bläschen besuchen und verlassen wir diesen besonderen Ort. In der Zuversicht, dass wir stets wieder zusammenstrudeln werden.<br /><br />
                        Also: weg mit den Performance-Ängsten auf dem Dancefloor, her mit den schrägen ansteckend freudigen Tänzen! Vergessen sind Dresscodes und Geltungsbedürfnisse, dieses Wochenende ist pures zelebrieren, dass wir alle gleichzeitig hier an diesem Ort existieren und vibrieren!<br /><br />
                        Bist du dabei?<br /><br />
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
                            <TicketButton />
                        </div>
                    </main>
                </div>
            </div>


            <div className="flex flex-col bg-gray-500 justify-between">
              <FestivalCountdown />
              <div className="flex flex-col justify-end items-end">
                <h2 className="flex flex-wrap text-8xl text-white text-center">Tage</h2>
                <h2 className="flex flex-wrap text-2xl text-white text-center">bis zum Festival</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default VisionPage;