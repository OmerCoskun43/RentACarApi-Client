/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Carousel } from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  return (
    <div
      className="border border-gray-300 rounded-xl p-3 mt-2   bg-yellow-500
    
    "
    >
      <div className="relative">
        <Carousel
          transition={{ duration: 1 }}
          className="rounded-xl  w-[350px] md:w-[500px] xl:w-[600px] border-b-2 border-black"
        >
          {car?.images.map((image, index) => (
            <img
              className="rounded-xl w-[355px] h-[200px] md:w-[600px] md:h-[300px] cursor-pointer bg-gray-300 "
              key={index}
              src={image}
              alt="car"
            />
          ))}
        </Carousel>
        <button
          onClick={() => navigate(`/cars/${car._id}`)}
          className="w-[25%] absolute bottom-0 right-0 h-[3rem] border-[2px] border-red-500 rounded-2xl bg-blue-600 hover:bg-blue-400 text-white font-bold text-sm md-text-xl"
        >
          Get Reservation
        </button>
      </div>
      <div className="text-md sm:text-xl">
        <div className="flex justify-between border-b-[1px] border-black ">
          <span className="font-bold ">Brand: </span>
          <span>{car.brand}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold ">Model: </span>
          <span>{car.model}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold ">Year: </span>
          <span>{car.year}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold ">Automatic: </span>
          <span>
            {car.isAutomatic ? (
              <FaCheck className="text-green-600" />
            ) : (
              <TiMinus className="text-red-600" />
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold ">Plate Number: </span>
          <span>{car.plateNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold ">Price Per Day: </span>
          <span className="text-red-600 ">₺ {car.pricePerDay}</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
