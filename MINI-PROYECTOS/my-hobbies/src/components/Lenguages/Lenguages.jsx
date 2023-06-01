import React from 'react';
import { HOBBIES } from '../HOBBIES';

const Languages = () => {
  const { languages } = HOBBIES;

  return (
    <div>
      <h2>Languages</h2>
      <p>Language: {languages.language}</p>
      <p>Writing Level: {languages.wrlevel}</p>
      <p>Speaking Level: {languages.splevel}</p>
    </div>
  );
}

export default Languages;
