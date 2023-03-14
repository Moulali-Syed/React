import React, { useState } from 'react';

const Child = (props) => {
  const [data, setData] = useState('');
  function handleChange(e) {
    setData(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    props.getData(data);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={data}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Child;
