import React, { useState } from "react";

const App = () => {

  const [userName, setUserName] = useState("");
  const [saveData, setSaveData] = useState([]);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleClick = () => {
    const name = {
      id: Date.now(),
      userName: userName,
    };
    setSaveData([...saveData, name]);
    setUserName("");
  };

  return (
    <>
      {/* <p>{userName}</p> */}
      <input type="text"value={userName}placeholder="Enter Name"onChange={handleChange}/>
      <button onClick={handleClick}>Save</button>
      {saveData.map((e) => (
        <div key={e.id}>
          <p>{e.userName}</p>
        </div>
      ))}
    </>
  );
};

export default App;