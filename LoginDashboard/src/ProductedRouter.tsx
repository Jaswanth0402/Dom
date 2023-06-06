
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from './App';

const useAuth = () => {
  const {User} = useUserContext() ;
  return User && User.loggedin;
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;