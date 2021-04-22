import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Users from './pages/Users';
import Home from './pages/Home';

function App() {
  return (
    <div>
     <Router>
       <div className="App">
       <Switch>
         <Route path='/home'>
          <Home />
         </Route>
         <Route path='/users'>
          <Users/>
         </Route>
       </Switch>
       </div>
     </Router>
    </div>
  );
}

export default App;
