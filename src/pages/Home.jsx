/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useCarCalls from "../services/useCarCalls";
import { useSelector } from "react-redux";

import CarCard from "../components/CarCard";

const Home = ({ search }) => {
  const { getCars } = useCarCalls();
  const { cars } = useSelector((state) => state.car);
  console.log("cars :>> ", cars);
  useEffect(() => {
    getCars(search);
  }, [search]);
  return (
    <div className="pb-5">
      <div>
        <div className="flex flex-wrap gap-3 justify-center ">
          {cars?.map((car) => (
            <CarCard car={car} key={car._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
