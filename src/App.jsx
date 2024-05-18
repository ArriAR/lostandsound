
import React, { useState, useEffect, useRef } from "react";
import "./components/FestivalCountdown.jsx";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import 'typeface-archivo';

import { Routes, Route, Router } from 'react-router-dom';
import LocationPage from './pages/location';
import LineupPage from './pages/Lineup';
import TicketsPage from './pages/Tickets';
import MerchPage from './pages/Merch';
import BilderPage from './pages/Bilder';
import ProgrammPage from './pages/Programm';
import LS23Page from './pages/LS23';
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
        <Route path="/lost-and-sound/" element={<HomePage />} />
        <Route path="/lost-and-sound" element={<HomePage />} />
        <Route path="/lost-and-sound/location" element={<LocationPage />} />
        <Route path="/lost-and-sound/lineup" element={<LineupPage />} />
        <Route path="/lost-and-sound/tickets" element={<TicketsPage />} />
        <Route path="/lost-and-sound/merch" element={<MerchPage />} />
        <Route path="/lost-and-sound/bilder" element={<BilderPage />} />
        <Route path="/lost-and-sound/programm" element={<ProgrammPage />} />
        <Route path="/lost-and-sound/ls23" element={<LS23Page />} />
        <Route path="/lost-and-sound/vision" element={<VisionPage />} />
        <Route path="/lost-and-sound/wichtige_infos" element={<InfoPage />} />
      </Routes>
    </Layout>
  );
}

export default App;


