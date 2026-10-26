import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '../contexts/LanguageContext';
import AppRoutes from './AppRoutes';

/** Prefixo do site ('/Portifolio'), vindo do `base` do Vite, sem a barra final. */
export const BASENAME = import.meta.env.BASE_URL.replace(/\/$/, '');

const Router: React.FC = () => (
  <BrowserRouter basename={BASENAME}>
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  </BrowserRouter>
);

export default Router;
