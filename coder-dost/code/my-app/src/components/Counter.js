import React, { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  function clickHandler(e) {
    e.stopPropagation();
    setNumber((number) => number + 1);
  }
  return (
    <>
      <h1 onClick={clickHandler}>{number}</h1>
    </>
  );
};

export default Counter;
