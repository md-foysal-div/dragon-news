import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../../context/AuthContext";

const Nav = () => {
  const { user, logOut } = useContext(Authcontext);

  const userLogOut = () => {
    return logOut();
  };

  const navLink = (
    <>
      <li className="list-none">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="list-none mx-4">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="list-none mx-4">
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 my-7">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden"></label>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">{navLink}</div>
      <div className="navbar-end">
        <img className="w-10 mr-2" src={user} alt="" />
        {user ? (
          <NavLink ><button onClick={userLogOut}>Logout</button></NavLink>
        ) : (
          <NavLink to="/login">
          <button> Login</button>
        </NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
