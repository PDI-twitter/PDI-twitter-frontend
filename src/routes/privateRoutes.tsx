import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import NoMatchPage from "../pages/404/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NoMatchPage />,
  },
]);

const PrivateRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default PrivateRoutes;
