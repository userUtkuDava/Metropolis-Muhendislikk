import './App.css'
import Navbar from './Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Slide from './Slide'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Deneme from './Deneme';
import Services from './Services';
import Contact from './Contact';
import Footer from './footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  return (
    <>
      <Navbar />
      <Slide />
      <Deneme />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
