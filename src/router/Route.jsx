import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import HowToAdoptPage from "../pages/HowToAdoptPage";
import AdminPage from "../pages/AdminPage";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Layout />,
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
