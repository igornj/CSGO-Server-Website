import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Pages
import Homepage from '../Pages/Homepage';
import Servidores from '../Pages/Servidores';
import Vip from '../Pages/VIP';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/vip" element={<Vip />} />
          <Route exact path="/servidores" element={<Servidores />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
