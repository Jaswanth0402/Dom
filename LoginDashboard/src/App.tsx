import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import ProtectedRoute from "./ProductedRouter";
import Login from "./component/Login";
import { createContext, useState, useContext } from "react";

interface uservalue {
  loggedin: boolean;
}

interface GlobalContent {
  User: uservalue;
  setUser: (User: { loggedin: boolean }) => void;
}
export const UserContext = createContext<GlobalContent>({
  User: { loggedin: false },
  setUser: () => {},
});
export const useUserContext = (): GlobalContent => useContext(UserContext);
function App(): JSX.Element {
  const [User, setUser] = useState<uservalue>({ loggedin: false });
  return (
    <>
      <div className="App">
        <UserContext.Provider value={{ User, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path={"/"} element={<Login />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
