

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
  ]);

const PrivateRoutes: React.FC = () => {
    return(
  <RouterProvider router={router} />
)}

export default PrivateRoutes;