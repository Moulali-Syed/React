import React from 'react';

const Hello2 = () => {
  return React.createElement(
    'div',
    { id: 'box', class: 'DummyClass' },
    React.createElement('h1', {}, 'Hello Moulali Syed')
  );
};

export default Hello2;
