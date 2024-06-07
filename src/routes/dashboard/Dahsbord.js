import Header from '../../components/navigation/Header';
import './dashboard.css';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default Dashboard;
