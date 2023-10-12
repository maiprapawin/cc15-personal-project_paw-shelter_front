import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import HowToAdoptPage from "../pages/HowToAdoptPage";
import AdminPage from "../pages/AdminPage";
import { RouterProvider } from "react-router-dom";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import Authenticated from "../features/auth/Authenticated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    //ถ้า user มีค่า = redirect to home
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    //ต้องลอคอินผ่านก่อน ถึงจะเข้าหน้าพวกนี้ได้
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      { path: "home", element: <HomePage /> },
      { path: "how-to-adopt", element: <HowToAdoptPage /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
]);

export default function Route() {
  //เอาไว้อ่าน path เช็คหลัง / ของเราตามที่ router กำหนดไว้ด้านบน
  return <RouterProvider router={router} />;
}