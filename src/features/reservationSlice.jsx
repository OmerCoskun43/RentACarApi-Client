import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservations: [],
  reservation: "",
  loading: false,
  error: false,
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },

    getReservationSuccess: (state, action) => {
      state.reservations = action.payload.data.data;
      state.loading = false;
      state.error = false;
    },
    createReservationSuccess: (state, action) => {
      state.reservation = action.payload.data.data;
      state.loading = false;
      state.error = false;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getReservationSuccess,
  createReservationSuccess,
  getAvailiableReservationsSuccess,
  fetchFail,
} = reservationSlice.actions;

export default reservationSlice.reducer;
