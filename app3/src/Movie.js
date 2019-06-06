import React from 'react';

export default function Movie(props) {
  console.log(props.movie);
  return (
      <p>{props.movie}</p>
  )  
}