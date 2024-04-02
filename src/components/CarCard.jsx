/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Carousel } from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

const CarCard = ({ car }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-3 mt-2  bg-yellow-500">
      <div>
        <Carousel
          transition={{ duration: 1 }}
          className="rounded-xl w-[350px] md:w-[500px] xl:w-[600px] border-b-2 border-black"
        >
          {car?.images.map((image, index) => (
            <img
              className="rounded-xl w-[355px] h-[200px] md:w-[600px] md:h-[300px] bg-white "
              key={index}
              src={image}
              alt="car"
            />
          ))}
        </Carousel>
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
