import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const PrivateRoute = ({isLoggedIn,childern})=>{
   if(isLoggedIn){
    return  <Dashboard/>
   }
   else{
    return <Navigate to="/login"/>
   }
}
export default PrivateRoute;