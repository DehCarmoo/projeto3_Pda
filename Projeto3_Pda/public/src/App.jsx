import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import OngDetailsPage from './views/OngDetailsPage';
import OngsListPage from './views/OngsListPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ongs" element={<OngsListPage />} />
        <Route path="/ongs/:id" element={<OngDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
