import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Layout from './layouts/Layout';
import Landing from './layouts/Landing';
import MainContainer from './containers/MainContainer';
import Login from './screens/Login';
import Register from './screens/Register';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/legends');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/legends');
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };


    return (
      <div className="App">
        <Layout currentUser={currentUser} handleLogout={handleLogout}>
        </Layout>
          <Switch>
            
          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>

          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>

          <Route path='/'>
            <MainContainer />
          </Route>

      {currentUser && (
          <Route path='/legends'>
            <MainContainer />
          </Route>
          )}
          </Switch>
          
      </div>
    );
}

export default App;
