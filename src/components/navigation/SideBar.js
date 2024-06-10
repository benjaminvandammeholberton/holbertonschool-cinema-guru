import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation.css';
import axios from 'axios';
import Activity from '../Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import { dumpActivity } from '../../dump';
const SideBar = () => {
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (token) {
          const response = await axios.get(
            'http://localhost:8000/api/activity',
            {
              headers: {
                authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            }
          );
          if (response.status === 200) {
            setActivities(response.data);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchActivity();
  }, []);

  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(`/${pageName}`);
  };

  return (
    <nav
      onMouseEnter={() => setSmall(false)}
      onMouseLeave={() => setSmall(true)}
      className={`side-bar ${small ? 'side-bar-small' : 'side-bar-expanded'}`}
    >
      <ul className="navigate">
        <li onClick={() => setPage('home')}>
          <FontAwesomeIcon icon={faFolder} className="icon" />
          {!small && <span>Home</span>}
        </li>
        <li onClick={() => setPage('favorites')}>
          <FontAwesomeIcon icon={faStar} className="icon" />
          {!small && <span>Favorites</span>}
        </li>
        <li onClick={() => setPage('watchlater')}>
          <FontAwesomeIcon icon={faClock} className="icon" />
          {!small && <span>Watch Later</span>}
        </li>
      </ul>
      {!small && (
        <div className="activity">
          <h1>Latest Activities</h1>
          <ul>
            {dumpActivity.slice(0, 10).map((activity) => (
              <Activity
                key={activity.TitleId}
                username={activity.user.username}
                date={activity.createdAt}
                movieTitle={activity.title.title}
                type={activity.activityType}
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SideBar;
