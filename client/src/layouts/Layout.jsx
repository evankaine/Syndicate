import { Link } from 'react-router-dom';
import "./Layout.css"

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout-container">
      {currentUser ? (
        <div>
          <h1 className="logo-in">The Syndicate</h1>
          
          <p className="username">{currentUser.username}</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          
        <div className="logged-out">
            <h1 className="logo-out">THE SYNDICATE</h1>
            <p className="desc-out">LEGEND INFORMATION AND GAME TIPS</p>
              <div className="link-out">
                <Link className="link-login" to='/login'>Login</Link>
                <Link className="link-register" to='/register'>Sign Up</Link>
              </div>
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