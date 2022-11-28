import Nav from './components/nav';
import About from './components/about';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
