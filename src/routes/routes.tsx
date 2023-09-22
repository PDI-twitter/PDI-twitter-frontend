import { useEffect } from "react";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
import LoadingPage from "../pages/Loading/LoadingPage";
import { useSelector } from "react-redux";
import { AuthState } from "../redux/authSlice";
import { IUser } from "../models/user";
import { localStorageControl } from "../storage/localStorage";
import { verify } from "crypto";
import { useDispatch } from "react-redux";
import { verifyUserInLocalHost } from "../redux/authSlice";

const Routes: React.FC = () => {
  const isSigned = useSelector(
    (state: { auth: AuthState }) => state.auth.isAuthenticated
  );
  const isLoading = useSelector(
    (state: { auth: AuthState }) => state.auth.isLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyUserInLocalHost());
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return isSigned ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
