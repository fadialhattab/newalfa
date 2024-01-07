import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(null);

      // Use a secure authentication endpoint and pass credentials securely
      const response = await axios.post('http://localhost:4000/api/user/login', {
        userName,
        password,
      });

      // Assuming the API returns a token upon successful login
      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Redirect to the home page
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <label>User Name:</label>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
