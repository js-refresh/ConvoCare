import './App.css';
import { Link, NavLink, Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setUser } from './redux/actions';
import Thread from './pages/Thread'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Nav } from 'react-bootstrap';
import Journal from './pages/Journal';
import Bipolar from './pages/Bipolar';
import Anxiety from './pages/Anxiety';
import BorderlinePersonality from './pages/BorderlinePersonality';
import Depression from './pages/Depression';
import EatingDisorders from './pages/EatingDisorders';
import OCD from './pages/OCD';
import PTSD from './pages/PTSD';
import Schizophrenia from './pages/Schizophrenia';
import SuicidePrevention from './pages/SuicidePrevention';
import ADHD from './pages/ADHD';
import Autism from './pages/Autism';
import LearningDisabilities from './pages/LearningDisabilities';
import Tourettes from './pages/Tourettes';
import ProtectedRoute from './components/ProtectedRoute';
import VeteranLinks from './pages/VeteranLinks';
import MentalHealthLinks from './pages/MentalHealthLinks';



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
            <Link className="nav-link" to="/thread">Forum</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/journal">Journal</Link>
          </Nav.Item>
          <Nav.Item>
            {user ? (
              <>
                {/* <br /> */}
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
          <Thread />
        </Route>               
        <Route path='/anxiety'>
          <Anxiety />
        </Route>
        <Route path='/bipolar'>
          <Bipolar />
        </Route>
        <Route path='/borderlinepersonality'>
          <BorderlinePersonality />
        </Route>
        <Route path='/depression'>
          <Depression />
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
        <Route path='/schizophrenia'>
          <Schizophrenia />
        </Route>
        <Route path='/suicideprevention'>
          <SuicidePrevention />
        </Route>        
        <Route path='/adhd'>
          <ADHD />
        </Route>        
        <Route path='/autism'>
          <Autism />
        </Route>       
        <Route path='/learningdisabilities'>
          <LearningDisabilities />
        </Route>        
        <Route path='/tourettes'>
          <Tourettes />
        </Route>
        <Route path='/mentalhealthlinks'>
          <MentalHealthLinks />
        </Route>
        <Route path='/veteranlinks'>
          <VeteranLinks />
        </Route>        
      </Switch>
    </div>
  )
}

export default App;
