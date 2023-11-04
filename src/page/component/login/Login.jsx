import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "../navber/Nav";
import { Authcontext } from "../../../context/AuthContext";
const Login = () => {
  const [show , setshow] =useState(false)
  const { LogIn , loader} = useContext(Authcontext);
  const navigation = useNavigate()
  const location = useLocation()
  const logInForm = (e) => {
   if(loader){
       return <div><span className="loading loading-spinner text-error"></span></div>
   }
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    LogIn(email, password)
      .then((result) => {
        console.log(result.user)
        navigation(location?.state? location.state:'/')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const showPass = (media) =>{
   setshow(media)
  }
  return (
    <div>
      <Nav></Nav>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={logInForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text":'password'}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div><h3 onClick={()=>showPass(!show)}>show</h3></div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Login</button>
              </div>
              <Link to="/register">Register</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
