import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);

  // Optional: Destructure properties for better readability
  const status = err?.status || 'Unknown Error';
  const message = err?.message || 'Something went wrong. Please try again later.';

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Oops!!!</h1>
      <h2>Something went wrong!</h2>
      <h3>Status: {status}</h3>
      <p>{message}</p>
    </div>
  );
}

export default Error;
