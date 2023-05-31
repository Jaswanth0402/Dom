import React from 'react';
import Login from './Component/Login';
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './Component/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path={"/dashboard"} element={<Dashboard/>}  />
     <Route path={"/"} element={<Login/>}  />
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
