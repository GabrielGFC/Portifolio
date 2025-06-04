
import { HashRouter, Routes, Route } from 'react-router-dom';

import Main from '../pages';          // Main.tsx ou index.tsx dentro de /pages
import React from 'react';

const Router: React.FC = () => (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    </HashRouter>
);

export default Router;
