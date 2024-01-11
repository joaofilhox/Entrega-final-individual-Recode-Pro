import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Sobre Nós</h2>
          <p>Descubra o Ceará: Onde cada viagem é uma jornada única, entre as maravilhas do Nordeste brasileiro.</p>
        </div>
        <div className="footer-section links">
          <h2>Links Rápidos</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Destinos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
        <h2>Contato</h2>
          <p>Email: DescubraOCeara@example.com</p>
          <p>Telefone: (00) 1234-5678</p>
        </div>
      </div>
      <div className="footer-bottom">
      &copy; 2024 Agência de viagem Descubra o Ceará. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
