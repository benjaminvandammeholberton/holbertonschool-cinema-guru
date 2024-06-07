import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Register = ({ username, password, setUsername, setPassword }) => {
  return (
    <div className="login">
      <h1>Create a new account</h1>
      <Input
        label="Username"
        icon={faUser}
        type="text"
        value={username}
        setValue={setUsername}
      />
      <Input
        label="Password"
        icon={faKey}
        type="password"
        value={password}
        setValue={setPassword}
      />
      <Button label="Sign Up" />
    </div>
  );
};

export default Register;
