import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Portfolio from '../pages/portfolio';
import Privacidade from '../pages/privacidade';
import Termos from '../pages/termos';
import Cookies from '../pages/cookies';

const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
