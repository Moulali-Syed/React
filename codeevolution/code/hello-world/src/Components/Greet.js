import React from 'react';

const Greet = (props) => {
  return (
    <h1>
      Hello Good Morning {props.name} {props.heroName} {props.children}
    </h1>
  );
};

export default Greet;
