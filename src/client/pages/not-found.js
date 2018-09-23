import React from 'react';

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="center-align" style={{ marginTop: 300 }}>
      <h1>404</h1>
    </div>
  )
};

export default {
  component: NotFound
};
