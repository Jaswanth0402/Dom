// import logo from './logo.svg';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
import Signup from './signup';
import Home from './Home';
import Userdata from './userdata';
import Update from './Update';

function App() {
  return (
    
     <Routes>
     
     <Route  path='/' element={<Home/>}/>
     <Route path='/login'element={<Login/>}/>
     <Route path='/signup'element={<Signup/>}/>
     <Route path='/userdata'element={<Userdata/>}/>
     <Route  path='/update'  element={<Update/>}/>
    </Routes>
    
   
   
  );
}

export default App;
