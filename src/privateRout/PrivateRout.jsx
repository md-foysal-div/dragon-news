// /* eslint-disable react/prop-types */
// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { Authcontext } from "./context/AuthContext";

// const PrivateRout = ({children}) => {
//   const { user,loader} = useContext(Authcontext);
//    if(loader){
//      return <div className="mt-96 text-center"><span className="loading loading-spinner loading-lg mx-auto"></span></div>
//    }
//   if (user) {
//     return children

//   }
//   return <>
//        <Navigate to="/login" ></Navigate>;
//   </>
// };

// export default PrivateRout;
