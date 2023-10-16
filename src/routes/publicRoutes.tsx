import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import NoMatchPage from "../pages/404/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <NoMatchPage />,
  },
]);

const PublicRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default PublicRoutes;
