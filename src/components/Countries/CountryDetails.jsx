import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CountryDetails = () => {
  const data = useLoaderData();
  const {
    flags,
    name,
    continents,
    population,
    capital,
    area,
    region,
    startOfWeek,
    status,
    borders,
  } = data[0];
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="border p-4">
      <div>
        <img
          className="w-full md:h-screen border p-2 rounded-md"
          src={flags?.png}
          alt=""
        />
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-2xl">Name: {name?.common}</h1>
        <p className="text-lg">Official Name: {name?.official}</p>
        <p className="text-lg">Continents: {continents[0]}</p>
        <p className="text-lg">Capital: {capital ? capital : "Not found"}</p>
        <p className="text-lg">Population: {population}</p>
        <p className="text-lg">Area: {area}</p>
        <p className="text-lg">Region: {region}</p>
        <p className="text-lg">Start Of Week: {startOfWeek}</p>
        <p className="text-lg">Status: {status}</p>
        <div className="md:flex justify-center items-center gap-4">
          <span className="text-lg">Borders: </span>
          <div className="md:flex justify-center gap-4">
            {borders.map((border, index) => (
              <p key={index}>
                {index + 1}. {border}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button onClick={handleGoBack} className="w-full bg-sky-500 hover:bg-sky-700 py-2 px-4 rounded-md text-white text-lg">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CountryDetails;