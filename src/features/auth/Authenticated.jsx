import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function Authenticated({ children }) {
  //เพื่อป้องกัน path อะไรก็ตามที่จำเป็นต้องลอคอินก่อน ไม่ให้เข้าหน้าที่จำเป็นต้องลอคอินก่อนได้
  const { authUser } = useAuth(); //authUser = obj เพราะ AuthContext.jsx ส่ง props เป็น obj
  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return children;
}
