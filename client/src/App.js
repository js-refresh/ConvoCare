import './App.css';
import { Link, NavLink, Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setUser } from './redux/actions';
import PostThreadCard from './pages/PostThreadCard'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Container, Nav } from 'react-bootstrap';
import Journal from './pages/Journal';


function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userStatus, setUserStatus] = useState();
  const logout = () => {
    fetch('/api/v1/users/logout')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert(data.success);
          dispatch(setUser(null));
          history.push('/login');
        }
      });
  };
  useEffect(() => {
    fetch('/api/v1/users/current')
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          dispatch(setUser(data));
        }
        setUserStatus('CHECKED');
      });
  }, [dispatch]);

  return (
    <div className="App">
      <div className='navbar'>
        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Link className="nav-link" to="/home">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/thread">Thread</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/journal">Journal</Link>
          </Nav.Item>
          <Nav.Item>
            {user ? (
              <>
                <span className='username'>
                  {user.username}
                </span>
                <br />
                <NavLink className="nav-link" variant="danger" to="/login" onClick={logout}>
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="nav-link" variant="success" to="/login">
                  Login
                </NavLink>
              </>
            )}
          </Nav.Item>

        </Nav>
      </div>
      <Switch>
        <Route path='/' exact>
          <Redirect to="/Home" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path='/home'>
          <Home />
         </Route>
         <Route path='/journal'>
          <Journal/>
         </Route>
         <Route path='/thread'>
          <PostThreadCard />
         </Route>
       </Switch>
    </div>
  )
}

export default App;
