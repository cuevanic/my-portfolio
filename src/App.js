// src/App.js
import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot'; 

const App = () => {
  return (
    <div>
      <main>
        <Header />
        <About />
        <Skills />
        <Contact />
        <Footer />
        <Chatbot />
      </main>
    </div>
  );
}

export default App;
