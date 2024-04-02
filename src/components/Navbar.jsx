/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import useCarCalls from "../services/useCarCalls";

const Navbar = ({ search, setSearch, resDate, setResDate }) => {
  const navigate = useNavigate();
  const { getAvailableCars } = useCarCalls();

  const handleSearchDate = () => {
    getAvailableCars(resDate);
    setResDate({ startDate: "", endDate: "" });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between mt-5 w-[95%] mx-auto px-3 gap-2 mb-2 ">
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
      <div className="md:w-[24%] bg-blue-500 h-[3.5rem] rounded-2xl flex flex-wrap justify-center items-center gap-3 text-white font-bold ">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/">Logout</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
