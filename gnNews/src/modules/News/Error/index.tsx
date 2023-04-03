import React from 'react';

interface ErrorProps {
  children: string;
}

const Error = ({ children }: ErrorProps) => {
  console.log(children);
  return (
    <div className="position-absolute d-flex justify-content-center align-items-center top-50 start-50 translate-middle bg-danger w-75 h-50 mx-auto  ">
      <p className="fs-2 w-75 text-white">{children}</p>
    </div>
  );
};

export default Error;
