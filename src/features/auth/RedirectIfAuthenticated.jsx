import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  if (authUser && authUser.isAdmin === false) {
    return <Navigate to="/" />;
  }

  if (authUser && authUser.isAdmin === true) {
    return <Navigate to="/admin" />;
  }

  // authUser && authUser.isAdmin === true ? (
  //   <Navigate to="/admin" />
  // ) : (
  //   <Navigate to="/" />
  // );
  return children;
}
