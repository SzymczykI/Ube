import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface NavigationState {
  origin: any;
  destination: any;
  travelTimeInformation: any;
}

// Define the initial state using that type
const initialState: NavigationState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state: any, action: PayloadAction<any>) => {
      state.origin = action.payload;
    },
    setDestination: (state:any, action: PayloadAction<any>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state:any, action: PayloadAction<any>) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInfromation = (state: RootState) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
