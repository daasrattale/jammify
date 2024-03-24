import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";
import { ReactNode } from "react";

type ProtectedRouteProps = {
     children: ReactNode;
}


export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {


     const location = useLocation();
     const { isLoggedIn } = useAuth();

     console.log("token",isLoggedIn)

     // return !isLoggedIn ?
     //      (<>{children}</>) :
     //      (<Navigate to="/" state={{ from: location }} replace />);

     return isLoggedIn ?
          (<>{children}</>) :
          (<Navigate to="/" state={{ from: location }} replace />);


}