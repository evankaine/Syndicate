import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="wrapper">
      <div className="form">
        <div className="title">
          <h3 className="login">LOGIN</h3>
        </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);}}>
        <div className="input-wrap">
          <input
            type='text'
            name='username'
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
            
          <input
            type='password'
            name='password'
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
          
          <button className="raise" type="submit">Login</button>
        </form>
        <p className="linkWrap">
          Don't have an account? Join the Syndicate 
          <Link to="/register"
            className="signUpLink">
            Here
          </Link>
        </p>
        
      </div>
    </div>
  );
}