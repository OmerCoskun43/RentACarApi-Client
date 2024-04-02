/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import useAuthCalls from "../services/useAuthCalls";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuthCalls();
  const { user } = useSelector((state) => state.auth);
  // console.log("user :>> ", user);

  return (
    <div className="flex flex-col md:flex-row justify-between mt-5 w-[90%] md:w-[95%] mx-auto px-3 gap-2 mb-2 ">
      <div className="bg-blue-500 md:w-[18%] h-[3.5rem] flex justify-center items-center rounded-2xl ">
        <h1
          onClick={() => navigate("/")}
          className="text-[2rem] md:text-2xl  cursor-pointer font-bold text-yellow-500 animate-pulse "
        >
          Mistik Rent A Car
        </h1>
      </div>

      <div className="md:w-[20%] bg-blue-500 h-[3.5rem] rounded-2xl flex flex-wrap justify-center items-center gap-3 text-white font-bold ">
        {!user && (
          <NavLink
            to="/login"
            style={({ isActive }) => {
              return {
                color: isActive ? "yellow" : "white",
              };
            }}
          >
            Login
          </NavLink>
        )}
        {!user && (
          <NavLink
            to="/register"
            style={({ isActive }) => {
              return {
                color: isActive ? "yellow" : "white",
              };
            }}
          >
            Register
          </NavLink>
        )}
        {user && (
          <NavLink
            to="/profile"
            style={({ isActive }) => {
              return {
                color: isActive ? "yellow" : "white",
              };
            }}
          >
            Profile
          </NavLink>
        )}
        {user && user?.isAdmin && (
          <NavLink
            to="/admin"
            style={({ isActive }) => {
              return {
                color: isActive ? "yellow" : "white",
              };
            }}
          >
            Admin
          </NavLink>
        )}
        {user && (
          <NavLink to="/" onClick={() => logout()}>
            Logout
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
