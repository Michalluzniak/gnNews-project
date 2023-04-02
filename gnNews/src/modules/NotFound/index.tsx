import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 1000);
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center h-100 w-100 bg-dark text-white text-uppercase fs-2">
      Not found, redirect to home page...
    </div>
  );
};

export default NotFound;
