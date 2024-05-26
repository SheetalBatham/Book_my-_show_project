// MovieDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { id } = useParams();

  // Dummy movie data (replace with actual API call)
  const movie = { id: id, title: `Movie ${id}`, description: `Description for Movie ${id}` };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      {/* Add more details such as cast, rating, etc. */}
    </div>
  );
}

export default MovieDetailPage;
