import React from 'react';
import { HOBBIES } from '../HOBBIES';

const SongsHeard = () => {
  const { songsHeard } = HOBBIES;

  return (
    <div>
      <h2>Songs Heard</h2>
      <ul>
        {songsHeard.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
}

export default SongsHeard;
