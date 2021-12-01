import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Navbar from '../Components/Navbar';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
