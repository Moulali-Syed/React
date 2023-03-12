import React from 'react';
import Person from './Person';
const NameList = () => {
  const persons = [
    {
      id: 1,
      name: 'Apple',
      city: 'Shimla',
      age: 1,
    },
    { id: 2, name: 'Grapes', city: 'France', age: 3 },
    { id: 3, name: 'Mango', city: 'Guntur', age: 4 },
  ];

  const personList = persons.map((person) => <Person person={person} />);
  return <>{personList}</>;
};

export default NameList;
