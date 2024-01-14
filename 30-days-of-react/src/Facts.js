//Facts about Shiba Inu dog
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Facts = () => {
  const [shibaInuPrice, setShibaInuPrice] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); //Empty dependency array means run only once (When the component is mounted)

  const fetchData = async () => {
    try {
      axios.get("https://api.coingecko.com/api/v3/simple/price?ids=shiba-inu&vs_currencies=usd").then((res) => {
        setShibaInuPrice(res.data['shiba-inu'].usd);    
      }
      );

    } catch (error) {
      console.error('Error fetching Shiba Inu coin price:', error.message);
    }
  };

  return (
    <div>
      <h1>Facts about Shiba Inu breed</h1>
      <h2>Shiba Inu originated from Japan</h2>
      <h2>Shiba Inu have a life expectancy between 12-15 years</h2>
      <h2>*More facts coming soon</h2>

      <h1>Facts about Shiba Inu coin</h1>
      <h2>Price of Shiba Inu is {shibaInuPrice !== null ? `$${shibaInuPrice}` : 'loading...'} </h2>
    </div>
  );
};
