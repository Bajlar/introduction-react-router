import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const details = useLoaderData();
  const { name, email, username, address, phone, website, company } = details;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="border-2 py-4 md:w-1/3 text-center">
      <p className="text-lg">
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Company:</strong> {company?.name}
      </p>
      <p>
        <strong>Address:</strong> {address?.city}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Website:</strong> {website}
      </p>
      <div className="mt-4 px-2">
        <button
          onClick={handleGoBack}
          className="w-full p-2 px-4 bg-orange-400 hover:bg-orange-600 text-white text-lg font-bold rounded-md"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
