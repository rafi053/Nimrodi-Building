import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FloorState {
  floorAccess: {
    floorAccess: boolean[];
  };
}

const initialState: FloorState = {
  floorAccess:{
    floorAccess: [
      false,
      false,
      false,
      false,
      false,
     ]
  } 
};

const floorSlice = createSlice({
    initialState,
    name: 'floor',
  reducers: {
    changeAccess(state, action: PayloadAction<number>) {
      const floorId = action.payload;
      const floor = state.floorAccess.floorAccess[floorId];
      state.floorAccess.floorAccess[floorId] = !floor;
    },
  },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;