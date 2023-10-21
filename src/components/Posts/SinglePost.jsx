import React from 'react';
import { useNavigate } from 'react-router-dom';

const SinglePost = ({ post }) => {
  const { title, body } = post;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="border p-4 text-center my-3">
      <p className="text-2xl bg-red-500 p-2 text-white">{title}</p>
      <p className="text-lg mt-2">{body}</p>
      <div className="mt-4">
        <button
          onClick={handleGoBack}
          className="p-2 px-5 bg-green-400 hover:bg-green-600 text-white text-lg font-bold rounded-md"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default SinglePost;