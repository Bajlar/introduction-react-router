import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleUser from './SingleUser';

const Users = () => {
  const users = useLoaderData();
  return (
    <div className='grid md:grid-cols-3 gap-4'>
      {users.map((user) => (
        <SingleUser key={user.id} user={user}></SingleUser>
      ))}
    </div>
  );
};

export default Users;