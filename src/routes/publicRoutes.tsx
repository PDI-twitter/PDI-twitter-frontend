import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

const PublicRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default PublicRoutes;
