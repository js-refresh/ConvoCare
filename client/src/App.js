import './App.css';
import { Link, NavLink, Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setUser } from './redux/actions';
import PostThreadCard from './pages/PostThreadCard'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Nav } from 'react-bootstrap';
import Journal from './pages/Journal';
import BipolarAdult from './pages/BipolarAdult';
import AnxietyAdult from './pages/AnxietyAdult';
import BorderlinePersonality from './pages/BorderlinePersonality';
import DepressionAdult from './pages/DepressionAdult';
import EatingDisorders from './pages/EatingDisorders';
import OCD from './pages/OCD';
import PTSD from './pages/PTSD';
import SchizophreniaAdult from './pages/SchizophreniaAdult';
import SuicidePreventionAdult from './pages/SuicidePreventionAdult';
import ADHD from './pages/ADHD';
import AnxietyChildren from './pages/AnxietyChildren';
import Autism from './pages/Autism';
import BipolarChildren from './pages/BipolarChildren';
import DepressionChildren from './pages/DepressionChildren';
import LearningDisabilities from './pages/LearningDisabilities';
import Tourettes from './pages/Tourettes';
import SuicidePreventionChildren from './pages/SuicidePreventionChildren';
import SchizophreniaChildren from './pages/SchizophreniaChildren';
import ProtectedRoute from './components/ProtectedRoute';


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
          {userStatus === 'LOADING' && 'Loading...'}
          {userStatus === 'CHECKED' && (
         <ProtectedRoute path='/journal'>
          <Journal/>
         </ProtectedRoute>
          )}
         <Route path='/thread'>
          <PostThreadCard />
         </Route>
        <Route path='/anxietyadult'>
          <AnxietyAdult />
        </Route>
        <Route path='/bipolaradult'>
          <BipolarAdult />
        </Route>
        <Route path='/borderlinepersonality'>
          <BorderlinePersonality />
        </Route>
        <Route path='/depressionadult'>
          <DepressionAdult />
        </Route>
        <Route path='/eatingdisorders'>
          <EatingDisorders />
        </Route>
        <Route path='/ocd'>
          <OCD />
        </Route>
        <Route path='/ptsd'>
          <PTSD />
        </Route>
        <Route path='/schizophreniaadult'>
          <SchizophreniaAdult />
        </Route>
        <Route path='/suicidepreventionadult'>
          <SuicidePreventionAdult />
        </Route>
        <Route path='/adhd'>
          <ADHD />
        </Route>
        <Route path='/anxietychildren'>
          <AnxietyChildren />
        </Route>
        <Route path='/autism'>
          <Autism />
        </Route>
        <Route path='/bipolarchildren'>
          <BipolarChildren/>
        </Route>
        <Route path='/bipolaradult'>
          <BipolarAdult />
        </Route>
        <Route path='/depressionchildren'>
          <DepressionChildren />
        </Route>
        <Route path='/learningdisabilities'>
          <LearningDisabilities />
        </Route>
        <Route path='/schizophreniachildren'>
          <SchizophreniaChildren />
        </Route>
        <Route path='/suicidepreventionchildren'>
          <SuicidePreventionChildren />
        </Route>
        <Route path='/tourettes'>
          <Tourettes />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
