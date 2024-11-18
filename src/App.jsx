import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ShopPage from './pages/ShopPage';
import NavBar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="/contact" element={<ContactForm />} /> 
      </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
