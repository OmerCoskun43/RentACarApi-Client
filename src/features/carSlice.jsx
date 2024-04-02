import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  availiableCars: [],
  loading: false,
  error: false,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },

    getCarSuccess: (state, action) => {
      state.cars = action.payload.data.data;
      state.loading = false;
      state.error = false;
    },
    getAvailiableCarsSuccess: (state, action) => {
      state.availiableCars = action.payload.data.data;
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
  getCarSuccess,
  fetchFail,
  getAvailiableCarsSuccess,
} = carSlice.actions;

export default carSlice.reducer;
