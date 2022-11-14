import React from 'react';

const BaseH = ({className, children ,...props }) => {
  return (
  <h3 className={`text-white text-4xl ${className}`}> {children}</h3>
  );
};

export default BaseH;