import './App.css';
import Login from './routes/login/login.component';
import ToDoListHome from './routes/ToDoListHome/to-do-list-home.component';

import {React} from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="Root">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element ={<Login />} />
            <Route path = "/home" element ={<ToDoListHome />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
