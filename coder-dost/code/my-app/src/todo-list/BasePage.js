import React, { useState } from 'react';

const BasePage = () => {
  const [activity, setActivity] = useState('');
  const [listData, setListData] = useState([]);
  function addActivity() {
    // setListData([...listData, activity]);
    // console.log(listData);

    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity('');
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((data, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  }

  function removeAll() {
    setListData([]);
  }
  return (
    <>
      <div className="container">
        <div>TODO List</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p>Here is your list</p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <p key={i}>
                {data}{' '}
                <button onClick={() => removeActivity(i)}>remove(-)</button>
              </p>
            );
          })}
        {listData.length >= 1 && <button onClick={removeAll}>RemoveAll</button>}
      </div>
    </>
  );
};

export default BasePage;
