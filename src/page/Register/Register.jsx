import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../context/AuthContext";
import Nav from "../component/navber/Nav";

const Register = () => {
  const { createUser,loader } = useContext(Authcontext);
  const [error, setError] = useState();
  const createUserSubmit = (e) => {
    if(loader){
      return <span className="loading loading-spinner text-error"></span>
    }
    setError(" ")
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("password must be one uppercase");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user)
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
   <div>
     <Nav></Nav>
     <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={createUserSubmit} className="card-body">
            <h3 className="text-center">Register your account</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <Link to="/login">LogIn</Link>
          </form>
          <p>{error}</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Register;
