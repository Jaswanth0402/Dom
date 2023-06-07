import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "./App";

const useAuth = (): boolean => {
  const { User } = useUserContext();
  return User?.loggedin;
};

const ProtectedRoutes = (): JSX.Element => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
