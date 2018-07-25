import React from 'react';

const Error = ({ response, status }) => (
  <div>
    <h2>Oops!</h2>
    <p>Something went wrong! Please try searching again.</p>
    <b>
      {status}: {response.message}
    </b>
  </div>
);

export default Error;
