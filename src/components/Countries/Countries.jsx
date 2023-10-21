import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCountry from './SingleCountry';

const Countries = () => {
  const countries = useLoaderData();

  return (
    <div className='grid md:grid-cols-3 gap-4'>
      {countries.map((country) => (
        <SingleCountry key={country.cca2} country={country}></SingleCountry>
      ))}
    </div>
  );
};

export default Countries;