import React from 'react';
import { HOBBIES } from '../HOBBIES';

const Sports = () => {
  const { sports } = HOBBIES;

  return (
    <div>
      <h2>Sports</h2>
      <ul>
        {sports.map((sport, index) => (
          <li key={index}>
            Name: {sport.name}<br />
            Indoor: {sport.indoor ? 'Yes' : 'No'}<br />
            Favorite Team: {sport.favoriteTeam}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sports;