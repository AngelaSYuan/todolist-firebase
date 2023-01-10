import './App.css';
import Login from './routes/login/login.component';
import ToDoListHome from './routes/ToDoListHome/to-do-list-home.component';

import {React} from 'react';

import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="Root">
      <div className="App">
        <HashRouter>
          {/* <Routes> */}
            <Route path = "/" element={<Login />} />
            <Route exact path = "/home" element={<ToDoListHome />} />
          {/* </Routes> */}
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
