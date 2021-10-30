import React, {useContext } from 'react';
import TestContext from './testcontext';
import Test2 from './test2';

const Test = ({ passedValue }) => {
  const movie = useContext(TestContext);
  console.log(movie);
  
  return (
    <>
      <div>
        <h3>{passedValue}</h3>
        <h3>Title: {movie.name}</h3>
        <h3>Director: {movie.director}</h3>
        <h3>Rating: {movie.rating}</h3>
      </div>
      <div>
        <Test2 />
      </div>
    </>
  );
};

export default Test;
