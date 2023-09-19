import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
import LoadingPage from "../pages/Loading/LoadingPage";
import { useSelector } from 'react-redux';
import { AuthState } from "../redux/authSlice";
import { IUser } from "../models/user";

const Routes: React.FC = () => {
    const isSigned = useSelector((state: {auth: AuthState}) => state.auth.isAuthenticated);
    const isLoading = useSelector((state: {auth: AuthState}) => state.auth.isLoading);

    if(isLoading){
        return <LoadingPage />
    }
    
    return isSigned ? <PrivateRoutes /> : <PublicRoutes />
}

export default Routes;