import React from 'react';
import Person2 from './Person2';

const NameList2 = () => {
  const names = ['Diana', 'Clark', 'Bruce'];

  const nameList = names.map((name, index) => (
    <Person2 key={index} name={name} />
  ));
  return <div>{nameList}</div>;
};

export default NameList2;
