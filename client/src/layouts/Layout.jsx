import { Link } from 'react-router-dom';
import "./Layout.css"

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout-container">
      {currentUser ? (
        <div className="logged-in">
          <div className="logo-container">
          <Link className="logo-link" to="/legends">
            <h1 className="logo-in">THE SYNDICATE</h1>
          </Link>
          </div>
          <div className="account-container">
            <p className="username">SIGNED IN AS: <span>{currentUser.username}</span></p>
            <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
          </div>
        </div>
      ) : (
        <div className="logged-out">
          <div className="logo-container">
            <Link className="logo-link" to="/legends">
              <h1 className="logo-out">THE SYNDICATE</h1>
            </Link>
          </div>
          <div className="button-container">
            <Link to="/login">
              <button className="login-button">
                LOGIN
              </button>
            </Link>
            <Link to="/register">
              <button className="register-button">
                REGISTER
              </button>
            </Link>
          </div>    
        </div>
      )}
    </div>
  );
}