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
  const { cars, availiableCars } = useSelector((state) => state.car);

  useEffect(() => {
    getCars(search);
  }, [search]);
  return (
    <div className="pb-5">
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
