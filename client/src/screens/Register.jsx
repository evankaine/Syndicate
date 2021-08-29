import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="background">
    <div className="wrapper">
      <div className="form">
        <div className="title">
          <h3 className="register">REGISTER</h3>
        </div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);}}>
      <div className="input-wrap">
        <input
          type='text'
          name='username'
          placeHolder="Username"
          value={formData.username}
            onChange={handleChange}
          />
  
        <input
          type='text'
          name='email'
          placeHolder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      
        <input
          type='password'
          name='password'
          placeHolder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
          
      <button className="raise" type="submit">SUBMIT</button>
        </form>
        <p className="linkWrap">
          Already have an account? Log In 
          <Link to="/login"
            className="signUpLink">
            Here
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
}