import React from 'react';
import { Link } from 'react-router-dom';

const SingleCountry = ({ country }) => {
  const { flags, name, population, capital, cca2 } = country;
  return (
    <div className="border p-4">
      <div>
        <img
          className="w-full h-60 border p-2 rounded-md"
          src={flags?.png}
          alt=""
        />
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-2xl">Name: {name?.common}</h1>
        <p className="text-lg">Capital: {capital ? capital : "Not found"}</p>
        <p className="text-lg">Population: {population}</p>
      </div>
      <div className="mt-4">
        <Link to={`/country/${cca2}`}>
          <button className="w-full bg-sky-500 hover:bg-sky-700 py-2 px-4 rounded-md text-white text-lg">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCountry;