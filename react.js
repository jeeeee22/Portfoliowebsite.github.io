import React, { useState } from 'react';

const TextChanger = () => {
  const [text, setText] = useState('Welcome to my portfolio');

  const handleChangeText = (newText) => {
    setText(newText);
  };

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => handleChangeText('I am Computer Engineer')}>
        Change to Computer Engineer
      </button>
      <button onClick={() => handleChangeText('I am Technical Support')}>
        Change to Technical Support
      </button>
      <button onClick={() => handleChangeText('I am Frontend Developer')}>
        Change to Frontend Developer
      </button>
      <button onClick={() => handleChangeText('Welcome to my portfolio')}>
        Back to Welcome
      </button>
    </div>
  );
};

export default TextChanger;
