import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Notes from './pages/Notes';
import Assignments from './pages/Assignment';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCond from './pages/TermsCond';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrolltoTop';

const App = () => {
  return (
    <>
      
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/assignment" element={<Assignments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsCond />} />

      </Routes>
      <Footer/>
    </>
  );
};

export default App;
