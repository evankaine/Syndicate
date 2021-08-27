import { Link } from 'react-router-dom';
import "./Layout.css"

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout-container">
      {currentUser ? (
        <div className="logged-in">
          <div className="logo-container">
            <h1 className="logo-in">THE SYNDICATE</h1>
          </div>
          <div className="account-container">
            <p className="username">Signed In As: {currentUser.username}</p>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : (
          
          <div className="logged-out-container">
            <div className="logged-out">
            <h1 className="logo-out">THE SYNDICATE</h1>
            <p className="desc-out">LEGEND INFORMATION AND GAME TIPS</p>

            <div className="link-out">
            <img className="apex-logo"
                src="https://cdn.freebiesupply.com/images/large/2x/apex-legends-symbol-white.png">
            </img>
              <Link className="link-login" to='/login'>LOGIN</Link>
              <img className="apex-logo"
                src="https://cdn.freebiesupply.com/images/large/2x/apex-legends-symbol-white.png">
                </img>
                </div>
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