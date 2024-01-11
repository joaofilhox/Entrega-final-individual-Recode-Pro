import React from 'react';
import './style.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-section">
        <h1>Bem-vindo ao Descubra o Ceará</h1>
        <p>Sua porta de entrada para uma jornada inesquecível pelo coração do Nordeste brasileiro. Somos uma equipe apaixonada por viagens e, mais especificamente, pelo Ceará - uma terra rica em cultura, beleza natural e hospitalidade.

          Nossa missão é proporcionar a você experiências autênticas e memoráveis, revelando os encantos únicos dessa região. Desde praias paradisíacas até cidades históricas, queremos guiá-lo em uma descoberta fascinante do Ceará, destacando sua diversidade e singularidade.

          Junte-se a nós nessa aventura. Descubra o Ceará conosco e crie lembranças que durarão para sempre.</p>
      </div>
      <div className="team-section">
        <h2>Nossa Equipe</h2>
        <div className="member">
          <img src="https://media.licdn.com/dms/image/D4D03AQHfTUlRjqVZ3w/profile-displayphoto-shrink_800_800/0/1689250900679?e=1710374400&v=beta&t=WLvrxT7muqVLXhjhRZtOgIfqlDlIr3zEMKYl7ryO46E" alt="João Filho" />
          <h3>João Filho Lima da Silva</h3>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
