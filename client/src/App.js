import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Users from './pages/Users';

function App() {
  return (
    <div>
     <Router>
       <div className="App">
       <Switch>
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
