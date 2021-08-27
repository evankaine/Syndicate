import { Link } from 'react-router-dom';
import "./Layout.css"

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout-container">
      {currentUser ? (
        <div>
          <h1 className="logo">The Syndicate</h1>
          <p className="username">{currentUser.username}</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          
        <div className="landing-page">
          <h1 className="logo">The Syndicate</h1>
            <Link to='/login' className="login-link">Login</Link>
            <br />
            <Link to='/register' className="signup-link">Sign Up</Link>
        </div>

      )}
      
      {currentUser && (
        <div>
          
        </div>
      )}
      {props.children}
    </div>
  );
}