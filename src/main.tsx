import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/route';
import './styles/globals.scss';

const container = document.getElementById('root') as HTMLElement;
const app = (
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);

// Páginas pré-renderizadas já trazem o HTML: hidrata. Sem HTML (modo dev), renderiza do zero.
if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(container, app);
} else {
    ReactDOM.createRoot(container).render(app);
}
