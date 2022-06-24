import {Routes, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import CreateAcc from './pages/CreateAccPage/CreateAcc';
function App() {
  return (
   

      
      
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/CreateAcc' element={<CreateAcc/>} />
      </Routes>
    
  );
}

export default App;
