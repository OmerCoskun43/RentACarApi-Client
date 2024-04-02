/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import useCarCalls from "../services/useCarCalls";
import { useSelector } from "react-redux";
import useAuthCalls from "../services/useAuthCalls";

const Navbar = ({ search, setSearch, resDate, setResDate }) => {
  const navigate = useNavigate();
  const { getAvailableCars } = useCarCalls();
  const { logout } = useAuthCalls();
  const { user } = useSelector((state) => state.auth);
  // console.log("user :>> ", user);

  const handleSearchDate = () => {
    getAvailableCars(resDate);
    setResDate({ startDate: "", endDate: "" });
  };

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

      <div className=" md:w-[25%]  ">
        <input
          className=" w-[100%] h-[3.5rem] rounded-2xl p-2"
          type="text"
          placeholder="Search a Brand"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="md:w-[12%]  ">
        <input
          className=" w-[100%] h-[3.5rem] rounded-2xl p-2"
          type="date"
          value={resDate.startDate}
          onChange={(e) =>
            setResDate({ ...resDate, startDate: e.target.value })
          }
        />
      </div>
      <div className="md:w-[12%]  ">
        <input
          value={resDate.endDate}
          onChange={(e) => setResDate({ ...resDate, endDate: e.target.value })}
          className=" w-[100%] h-[3.5rem] rounded-2xl p-2"
          type="date"
        />
      </div>
      <div className="md:w-[10%]">
        <button
          onClick={handleSearchDate}
          className="w-[100%] h-[3.5rem] rounded-2xl bg-red-500 text-white font-bold"
        >
          Search Date
        </button>
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
