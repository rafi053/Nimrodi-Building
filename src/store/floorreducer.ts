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
      const floor = state.floorAccess.floorAccess.find((floor) => floor.id === floorId);
      if (floor) {
        floor.floorAccess = !floor.floorAccess;
      }
    },
  },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;