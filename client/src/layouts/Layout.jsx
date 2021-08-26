import { Link } from 'react-router-dom';
import "./Layout.css"

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout-container">
      {currentUser ? (
        <div>
          <h1>The Syndicate</h1>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          
        <div className="landing-page">
          <h1>The Syndicate</h1>
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/register'>Sign Up</Link>
        </div>

      )}
      
      {currentUser && (
        <div>
          <Link to='/foods'>Foods</Link>
          <Link to='/flavors'>Flavors</Link>
        </div>
      )}
      {props.children}
    </div>
  );
}