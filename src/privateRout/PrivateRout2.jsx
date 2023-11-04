/* eslint-disable react/prop-types */
import { useContext } from "react";
import  { Authcontext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRout2 = ({children}) => {
    const {user,loader} = useContext(Authcontext)
    const location = useLocation()
    if(loader){
        return <div className="text-center mt-40"><span className="loading loading-spinner text-error"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRout2;