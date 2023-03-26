import React from 'react';

export const SingleElement = ({ data }: any) => {
  return (
    <li className="border-bottom  mb-3">
      <h2 className="fs-5">{data.title}</h2>
      <p>{data.source.name}</p>
      <p>{data.publishedAt.split('T')[0]}</p>
    </li>
  );
};
