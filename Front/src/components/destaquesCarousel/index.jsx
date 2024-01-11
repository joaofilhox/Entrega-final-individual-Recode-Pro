import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'; // Certifique-se de que o nome do arquivo CSS está correto
import { api } from '../../services/api';
import LoadingScreen from '../loadingScreen/LoadingScreen';

const DestaquesCarousel = ({ destinations: propDestinations }) => {
  const [dataFromAPI, setDataFromAPI] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/AgenciaDeviagem');
        setDataFromAPI(response.data);
      } catch (error) {
        console.error('Error fetching data from the API:', error);
      }
    };
    fetchData();
  }, []);

  const destinations = dataFromAPI && dataFromAPI.slice(0, 4);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="destaques" className="packages">
      <Slider {...sliderSettings}>
        {destinations ? (
          destinations.map((destination) => (
            <div key={destination.id} className="package">
              <div className="destination">
                <h3>{`${destination.destinoName}`}</h3>
                <img src={destination.destinoURL} alt={destination.destinoName} />
                <p>{destination.destinoGenre}</p>
              </div>
            </div>
          ))
        ) : (
          <LoadingScreen />
        )}
      </Slider>
    </div>
  );
};

export default DestaquesCarousel;
