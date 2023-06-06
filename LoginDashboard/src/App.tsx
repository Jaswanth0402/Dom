import React from 'react';
import { useContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard';
import ProtectedRoute from './ProductedRouter';
import Login from './component/Login';
import { createContext, useState } from "react";

interface uservalue{
  loggedin:boolean
}

export type GlobalContent = {
   User: uservalue
  setUser:(User:{loggedin:boolean}) => void
}
export const UserContext = createContext<GlobalContent>({
  User:{loggedin:false} , // set a default value
setUser: () => {},
});
export const useUserContext = () => useContext(UserContext)
function App() {
  const [User, setUser] = useState<uservalue>({loggedin:false});
  return (
   <>
   <div className="App">
   <UserContext.Provider value ={{User,setUser }}>
      <BrowserRouter>
        <Routes>
        <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
          <Route
            path={'/'}
            element={<Login />}
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </div>
   </>
  );
}

export default App;
