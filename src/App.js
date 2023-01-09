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
        <HashRoute basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path = "/login" component={<Login />} />
            <Route path = "/home" component={<ToDoListHome />} />
          </Switch>
        </HashRoute>
      </div>
    </div>
  );
}

export default App;
