import React from 'react';

export const SingleElement = ({ data }: any) => {
  return (
    <li className=" rounded">
      <h2 className="fs-5">{data.title}</h2>
      <p>{data.source.name}</p>
      <p>{data.publishedAt.split('T')[0]}</p>
    </li>
  );
};
