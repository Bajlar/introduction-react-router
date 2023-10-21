import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="md:w-10/12 mx-auto px-4 h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center">This is error page</h1>
      <div className="mt-4 text-center">
        <Link to="/">
          <button className="btn py-2 px-4 bg-green-400 hover:bg-green-800 text-white text-lg font-bold rounded-md">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;