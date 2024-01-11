import React, { useState, useEffect } from 'react';
import './style.css';
import DestaquesCarousel from '../../components/destaquesCarousel';

const Home = () => {
  
  return (
    <div className="home">
      <div className="hero">
        <div className="overlay">
          <h1>Bem-vindo à <span>Descubra o Ceará</span></h1>
          <p>Descubra experiências únicas em destinos incríveis.</p>
          <a href="#destaques" className="btn">Explorar Destinos</a>
        </div>
      </div>
      <DestaquesCarousel/>
    </div>
  );
}

export default Home;
