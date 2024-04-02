/* eslint-disable no-unused-vars */
import { fetchStart, fetchFail, getCarSuccess } from "../features/carSlice";
import useAxios from "./useAxios";
import { toastErrorNotify } from "../helper/ToastNotify";

import { useDispatch } from "react-redux";

const useCarCalls = () => {
  const { axiosWithToken, axiosPublic } = useAxios();
  const dispatch = useDispatch();

  const getCars = async (brand) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/cars?search[brand]=${brand}`);

      dispatch(getCarSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`Cars fetched unsuccessfully.`);
    }
  };

  return { getCars };
};

export default useCarCalls;
