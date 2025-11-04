import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Portfolio from '../pages/portfolio';

const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
