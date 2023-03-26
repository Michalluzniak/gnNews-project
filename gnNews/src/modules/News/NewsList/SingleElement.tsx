import React from 'react';
import { Button } from 'reactstrap';

export const SingleElement = ({ data }: any) => {
  return (
    <li className="border-bottom pt-2 hover-primary cursor-pointer">
      <h2 className="fs-5">{data.title}</h2>
      <p className="my-2">{data.source.name}</p>
      <p>{data.publishedAt.split('T')[0]}</p>
    </li>
  );
};
