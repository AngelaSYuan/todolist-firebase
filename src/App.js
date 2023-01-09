import './App.css';
import Login from './routes/login/login.component';
import ToDoListHome from './routes/ToDoListHome/to-do-list-home.component';

import {React} from 'react';

import {
  BrowserRouter,
  HashRouter,
  Switch,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="Root">
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path = "/" element ={<Login />} />
            <Route path = "/home" element ={<ToDoListHome />} />
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
