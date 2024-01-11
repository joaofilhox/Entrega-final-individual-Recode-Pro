import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './style.css';
import LoadingScreen from '../../components/loadingScreen/LoadingScreen';

const Destinations = () => {
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

  return (
    <div className="destinations">
      <h1>Destinos disponíveis.</h1>
      <div className="destinations-grid">
        {dataFromAPI ? (dataFromAPI.map((destination) => (
          <div key={destination.id} className="destination">
            <div className="start-div">
              <h3>{`${destination.destinoName}`}</h3>
              <img src={destination.destinoURL} alt={destination.destinoName} />
              <p>{destination.destinoGenre}</p>
            </div>

            <div className="end-div">
              <span>{`$${destination.destinoPrice}`}</span>
              <button className="btn">Quero conhecer já</button>
            </div>
          </div>
        ))) : (<LoadingScreen />) }
      </div>
    </div>
  );
}

export default Destinations;
