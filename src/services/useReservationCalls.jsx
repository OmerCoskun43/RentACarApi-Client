/* eslint-disable no-unused-vars */
import {
  fetchStart,
  fetchFail,
  getReservationSuccess,
  createReservationSuccess,
} from "../features/reservationSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

import { useDispatch } from "react-redux";

const useReservationCalls = () => {
  const { axiosWithToken, axiosPublic } = useAxios();
  const dispatch = useDispatch();

  const getReservations = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/${id}/reservations`);

      dispatch(getReservationSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.message);
    }
  };

  const createReservations = async (formData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`/reservations`, formData);
      dispatch(createReservationSuccess({ data }));
      toastSuccessNotify(data.message || "Reservation created successfully.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.message);
    }
  };

  return { getReservations, createReservations };
};

export default useReservationCalls;
