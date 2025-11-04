import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/route';
import { GlobalStyle } from './styles/GlobalStyle';
import './styles/globals.scss';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <Router />
        <GlobalStyle />
    </React.StrictMode>
);
