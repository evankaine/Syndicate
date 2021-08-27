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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
          }}>
        <div className="title">
          <h3>Login</h3>
        </div>
        <div className="input-wrap">
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
              
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
          <br />
          <Link to='/register'>Register</Link>
          <button className="raise" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}