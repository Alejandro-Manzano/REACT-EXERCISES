import React from 'react';
import { HOBBIES } from '../HOBBIES';

const Movies = () => {
  const { movies } = HOBBIES;

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            Name: {movie.name}<br />
            Type: {movie.type}<br />
            Genre: {movie.genre}<br />
            Vote: {movie.vote}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
