import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OnboardPage from "../pages/Onboard/OnboardPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <OnboardPage />,
    },
  ]);

const PublicRoutes: React.FC = () => {
    return(
  <RouterProvider router={router} />
)}

export default PublicRoutes;