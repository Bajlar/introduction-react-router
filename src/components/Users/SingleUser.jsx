import React from 'react';
import { Link } from 'react-router-dom';

const SingleUser = ({ user }) => {
  const { id, name, email, username } = user;
  return (
    <div className="border p-4 text-center">
      <p className="text-lg">
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <Link to={`/user/${id}`}>
        <button className="w-full mt-4 py-2 px-4 bg-green-400 hover:bg-green-800 text-white text-lg font-bold rounded-md">
          Details
        </button>
      </Link>
    </div>
  );
};

export default SingleUser;