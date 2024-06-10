import './movies.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [iswatchLater, setIsWatchLater] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const favorites = fetchFavorite(token);
      // check if the movie is in this list and set isFavorite state

      const watchLater = fetchWatchLater(token);
      //check if the movie is in this list and set iswatchLater state
    }

    const fetchFavorite = async (token) => null;
    const fetchWatchLater = async (token) => null;
  }, []);
  return (
    <div>
      <li>
        <div>
          <FontAwesomeIcon icon={faClock} />
          <FontAwesomeIcon icon={faKey} />
        </div>
        <div></div>
      </li>
    </div>
  );
};

export default MovieCard;
