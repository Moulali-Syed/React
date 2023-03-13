import React from 'react';

const DemoChild = (props) => {
  return (
    <div>
      <button onClick={props.changeHandle}>Click</button>
    </div>
  );
};

export default DemoChild;
