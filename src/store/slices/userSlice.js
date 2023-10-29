import { createSlice } from "@reduxjs/toolkit";
import { fetchAddress } from "../async thunks/fetchAdress";

const initialState = {
  userName: "",
  status: "idle",
  error: "",
  position: {},
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsername(state, action) {
      state.userName = action.payload;
    },
  },
  //async thunks for geolocation
  extraReducers: (builder) => {
    builder.addCase(fetchAddress.pending, (state, action) => {
      state.error = "";
      state.status = "loading";
    });
    builder.addCase(fetchAddress.fulfilled, (state, action) => {
      state.address = action.payload.address;
      state.position = action.payload.position;
      state.error = "";
      state.status = "idle";
    });
    builder.addCase(fetchAddress.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export const { updateUsername } = userSlice.actions;
export const userReducer = userSlice.reducer;
