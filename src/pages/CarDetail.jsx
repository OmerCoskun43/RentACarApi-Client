/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCarCalls from "../services/useCarCalls";
import { TiMinus } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import { Carousel } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import useReservationCalls from "../services/useReservationCalls";

const CarDetail = () => {
  const { id } = useParams();
  const { getOneCar } = useCarCalls();
  const { car } = useSelector((state) => state.car);
  const { user } = useSelector((state) => state.auth);
  const { reservation } = useSelector((state) => state.reservation);
  const { createReservations } = useReservationCalls();
  const [formData, setFormData] = useState({
    userId: user?._id || "",
    carId: car?._id || "",
    startDate: "",
    endDate: "",
  });
  useEffect(() => {
    getOneCar(id);
  }, []);

  console.log("reservation :>> ", reservation);

  const handleSubmit = (e) => {
    e.preventDefault();
    createReservations(formData);
    setFormData({
      ...formData,
      userId: user?._id || "",
      carId: car?._id || "",
      startDate: "",
      endDate: "",
    });
    console.log(formData);
  };

  return (
    <div>
      <div className="flex flex-col justify-center  md:flex-row">
        <div
          className="border border-gray-300 md:w-[45%] w-[90%] mx-auto mt-5 rounded-xl p-3 md:p-5   bg-blue-200
    
    "
        >
          <div className="relative">
            <Carousel
              transition={{ duration: 1 }}
              className="rounded-xl  w-full md:w-[420px] xl:w-full border-b-2 border-black"
            >
              {car?.images?.map((image, index) => (
                <img
                  className="rounded-xl w-full h-[200px] md:w-[420px] xl:w-full  md:h-[300px] cursor-pointer bg-gray-300 "
                  key={index}
                  src={image}
                  alt="car"
                />
              ))}
              <h1></h1>
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
        <div className=" mx-auto w-[90%] md:w-[45%] mt-5 rounded-xl p-3 md:p-5 bg-green-200">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <h1 className="font-bold w-[30%]">Username:</h1>
              <p className="w-[70%] input-style bg-white"> {user?.username} </p>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="font-bold  w-[30%] ">Car:</h1>
              <p className="w-[70%] input-style bg-white">
                {" "}
                {car?.brand + " " + car?.model}{" "}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="font-bold  w-[30%] ">Start Date:</h1>
              <input
                className="w-[70%] input-style"
                type="date"
                required
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <h1 className="font-bold  w-[30%] ">End Date:</h1>
              <input
                className="w-[70%] input-style"
                type="date"
                required
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
              />
            </div>

            <button
              className="  rounded-2xl bg-red-500 h-[2rem] mt-2 text-white font-bold "
              type="submit"
            >
              Book Now
            </button>
          </form>

          {reservation && (
            <div>
              <h1 className="font-bold text-center md:text-2xl">
                {" "}
                Reservation Details{" "}
              </h1>
              <div className="flex justify-between items-center">
                <h1 className="font-bold w-[30%]">Username:</h1>
                <p className="w-[70%] input-style bg-white">
                  {" "}
                  {user?.username}{" "}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="font-bold w-[30%]">StartDate:</h1>
                <p className="w-[70%] input-style bg-white">
                  {" "}
                  {new Date(reservation?.startDate).toDateString()}{" "}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="font-bold w-[30%]">EndDate:</h1>
                <p className="w-[70%] input-style bg-white">
                  {" "}
                  {new Date(reservation?.endDate).toDateString()}{" "}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" mx-auto w-[95%]  mt-5 rounded-xl p-3 md:p-5 bg-white">
        <h1 className="font-bold text-center md:text-2xl">Your Reservations</h1>
      </div>
    </div>
  );
};

export default CarDetail;
