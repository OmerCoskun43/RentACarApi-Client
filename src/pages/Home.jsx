/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useCarCalls from "../services/useCarCalls";
import { useSelector } from "react-redux";

import CarCard from "../components/CarCard";

const Home = ({ search, setSearch, resDate, setResDate }) => {
  const { getCars } = useCarCalls();
  const { cars, availiableCars } = useSelector((state) => state.car);
  const { getAvailableCars } = useCarCalls();

  useEffect(() => {
    getCars(search);
  }, [search]);
  const handleSearchDate = () => {
    getAvailableCars(resDate);
    setResDate({ startDate: "", endDate: "" });
  };
  return (
    <div className="pb-5">
      <div className="flex flex-col p-3 md:p-0  md:flex-row gap-3 md:ps-12 mt-5">
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
            onChange={(e) =>
              setResDate({ ...resDate, endDate: e.target.value })
            }
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
      </div>
      {availiableCars.length > 0 && (
        <div>
          <div className="flex flex-wrap gap-3 justify-center ">
            {availiableCars?.map((car) => (
              <CarCard car={car} key={car._id} />
            ))}
          </div>
        </div>
      )}

      {availiableCars.length === 0 && (
        <div>
          <div className="flex flex-wrap gap-3 justify-center ">
            {cars?.map((car) => (
              <CarCard car={car} key={car._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
