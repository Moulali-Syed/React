import React, { useState } from 'react';

const AddVideo = () => {
  const [video, setVideo] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    console.log(video);
  }

  function handleChange(e) {
    e.stopPropagation();
    console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
  }
  return (
    <form>
      <input type="text" onChange={handleChange} />
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
};

export default AddVideo;
