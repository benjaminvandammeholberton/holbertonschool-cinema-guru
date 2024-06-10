import './components.css';

const Activity = ({ username, movieTitle, type, date }) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatedDate = new Date(date).toLocaleDateString('en-US', options);

  const displayType = type === 'favorite' ? 'favorites' : type;
  return (
    <li>
      <p>
        <span>{username}</span> added <span>{movieTitle}</span> to {displayType}{' '}
        - {formatedDate}
      </p>
    </li>
  );
};

export default Activity;
