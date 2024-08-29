import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const OngDetailsPage = () => {
  const { id } = useParams();
  const ong = {
    id,
    name: `ONG ${id}`,
    description: `Description for ONG ${id}`,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold">{ong.name}</h1>
        <p>{ong.description}</p>
      </main>
      <Footer />
    </div>
  );
};

export default OngDetailsPage;
