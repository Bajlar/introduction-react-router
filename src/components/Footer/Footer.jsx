import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='mt-auto text-center py-4'>
      <p>Thank you for visiting our website Bajlar@{currentYear}.</p>
    </div>
  );
};

export default Footer;
