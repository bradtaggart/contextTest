import React, {useContext } from "react";
import TestContext from "./testcontext";

const Test2 = () => {
  const movie = useContext(TestContext);
  return (
    <>
      <div>
        <h3>From Test2</h3>
        <h3>Title: {movie.name}</h3>
        <h3>Director: {movie.director}</h3>
        <h3>Rating: {movie.rating}</h3>
      </div>
    </>
  );
};

export default Test2;