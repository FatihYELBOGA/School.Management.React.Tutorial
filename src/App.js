import './App.css';
import CreateUser from './components/CreateUser';
import UsersHandling from './components/UsersHandling';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';

function App() {

  return (
    <Router>
      <div className="container">
        <Menu />
        <Switch>
          <Route path = "/students"> 
            <UsersHandling className="students" />
          </Route>
          <Route path = "/add-student">
            <CreateUser className="add-student" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
