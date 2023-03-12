import React from 'react';

const Person = (props) => {
  const person = props.person;
  return (
    <>
      <h1>
        Iam {person.name} of age {person.age} from city {person.city}
      </h1>
    </>
  );
};

export default Person;
