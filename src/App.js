import React from 'react'
import "./style.css";
import Test from "./components/test";
import TestContext from "./components/testcontext";

const movie = {
  name: "Star Wars",
  rating: 8.5,
  director: "Brad Taggart"
};

export default function App() {
  return (
    <TestContext.Provider value={movie}>
      <div className="App">
        <Test passedValue="testing" />
      </div>
    </TestContext.Provider>
  );
}
