// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Dummy movie data
  const movies = [
    { id: 1, title: 'Movie 1', description: 'Description for Movie 1' },
    { id: 2, title: 'Movie 2', description: 'Description for Movie 2' },
    // Add more movie data as needed
  ];

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

