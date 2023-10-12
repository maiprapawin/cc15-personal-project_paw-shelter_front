import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null); //null = user นี้ไม่ได้ลอคอินอยู่ ถ้าลอคอิน อัพเดท state เป็นข้อมูล user
  const [initialLoading, setInitialLoading] = useState(true);

  /// Send req ไปเพื่อ verify token
  //ทุกครั้งที่เปิดหน้าขึ้นมาใหม่ ต้อง verify token ใหม่เสมอ
  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me") // มี interceptor ของ axios ช่วยเพิ่ม headers authorization ให้เราโดยไม่ต้อง manual เขียนโค้ดเอง
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  const login = async (credential) => {
    // credential = input จาก LoginForm
    const res = await axios.post("/auth/login", credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const register = async (registerInputObject) => {
    const res = await axios.post("/auth/register", registerInputObject);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ login, authUser, initialLoading, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
