import { useState } from 'react';
import './movies.css';

const Tag = ({ genre, filter, genres, setGenres }) => {
  const [selected, SetSelected] = useState(false);

  const handleTag = (selected) => {
    if (selected) {
      // remove from genres
      SetSelected(false);
    } else {
      // add to genres
      SetSelected(true);
    }
  };
  return (
    <li
      className={`tag ${selected && 'selected'}`}
      onClick={() => handleTag(selected)}
    >
      {genre}
    </li>
  );
};

export default Tag;
