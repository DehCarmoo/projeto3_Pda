import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const OngsListPage = () => {
  const ongs = [
    { id: 1, name: 'ONG A', description: 'Description for ONG A' },
    { id: 2, name: 'ONG B', description: 'Description for ONG B' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold">NGOs List</h1>
        <ul>
          {ongs.map(ong => (
            <li key={ong.id} className="my-2">
              <Link to={`/ongs/${ong.id}`} className="text-blue-500">{ong.name}</Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default OngsListPage;
