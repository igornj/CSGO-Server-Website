import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Pages
import Homepage from '../Pages/Homepage';
import Servidores from '../Pages/Servidores';
import Faq from '../Pages/FAQ';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/servidores" element={<Servidores />} />
          <Route exact path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
