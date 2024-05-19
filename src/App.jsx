
import React, { useState, useEffect, useRef } from "react";
import "./components/FestivalCountdown.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import 'typeface-archivo';

import { Routes, Route, Router } from 'react-router-dom';
import LocationPage from './pages/location.jsx';
import LineupPage from './pages/Lineup.jsx';
import TicketsPage from './pages/Tickets.jsx';
import MerchPage from './pages/Merch.jsx';
import BilderPage from './pages/Bilder.jsx';
import ProgrammPage from './pages/Programm.jsx';
import LS23Page from './pages/LS23.jsx';
import HomePage from "./pages/home.jsx";
import VisionPage from "./pages/vision.jsx";
import InfoPage from "./pages/infos.jsx";

function Layout({ children }) {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Hero scrollToContent={scrollToContent} />
      <main ref={contentRef}>{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return ( 
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lostandsound/" element={<HomePage />} />
        <Route path="/lostandsound" element={<HomePage />} />
        <Route path="/lostandsound/location" element={<LocationPage />} />
        <Route path="/lostandsound/lineup" element={<LineupPage />} />
        <Route path="/lostandsound/tickets" element={<TicketsPage />} />
        <Route path="/lostandsound/merch" element={<MerchPage />} />
        <Route path="/lostandsound/bilder" element={<BilderPage />} />
        <Route path="/lostandsound/programm" element={<ProgrammPage />} />
        <Route path="/lostandsound/ls23" element={<LS23Page />} />
        <Route path="/lostandsound/vision" element={<VisionPage />} />
        <Route path="/lostandsound/wichtige_infos" element={<InfoPage />} />
      </Routes>
    </Layout>
  );
}

export default App;


