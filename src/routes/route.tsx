import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from '../contexts/LanguageContext';
import Portfolio from '../pages/portfolio';
import Trajetoria from '../pages/trajetoria';
import ProjectPage from '../pages/projeto';
import Privacidade from '../pages/privacidade';
import Termos from '../pages/termos';
import Cookies from '../pages/cookies';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/trajetoria" element={<Trajetoria />} />
        <Route path="/projetos/:id" element={<ProjectPage />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </AnimatePresence>
  );
};

const Router: React.FC = () => {
  return (
    <HashRouter>
      <LanguageProvider>
        <AnimatedRoutes />
      </LanguageProvider>
    </HashRouter>
  );
};

export default Router;
