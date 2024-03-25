import React, { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [textList, setTextList] = useState([]);

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Function to handle append button click
  const handleAppendClick = () => {
    if (inputText.trim() !== '') {
      setTextList([...textList, inputText]);
      setInputText('');
    }
  };

  return (
    <div>
      <h2>Text Append Module</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <button onClick={handleAppendClick}>Append</button>
      <ul>
        {textList.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
