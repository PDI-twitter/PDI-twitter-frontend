import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
import LoadingPage from "../pages/Loading/LoadingPage";

const Routes: React.FC = () => {
    const isSigned: boolean = false
    const isLoading: boolean = false

    if(isLoading){
        return <LoadingPage />
    }
    
    return isSigned ? <PrivateRoutes /> : <PublicRoutes />
}

export default Routes;