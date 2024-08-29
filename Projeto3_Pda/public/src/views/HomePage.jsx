import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold">Welcome to NGO Donation App</h1>
        <p>Find and donate to local NGOs.</p>
        <Link to="/ongs" className="text-blue-500">View NGOs</Link>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
