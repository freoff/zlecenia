import React from 'react';

const Error = ({ forField, formErrors }) => {
  if (formErrors[forField] === undefined) return null;
  return (
    <p className="text-danger " >Error: {formErrors[forField]} </p>
  );
};

export default Error;
