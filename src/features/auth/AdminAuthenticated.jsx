import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

export default function AdminAuthenticated({ children }) {
  const { authUser } = useAuth(); //authUser = obj เพราะ AuthContext.jsx ส่ง props เป็น obj
  //   if (!authUser) {
  //     return <Navigate to="/login" />;
  //   }

  if (authUser.isAdmin === false) {
    return <Navigate to="/" />;
  }

  return children;
}
