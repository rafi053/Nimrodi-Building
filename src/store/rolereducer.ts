import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import roles from '../data/roles.json';

interface RoleState {
    currentRole: string;
}

const initialState: RoleState = {
    currentRole: roles[0],
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<number>) {
      const newRole = action.payload;
        state.currentRole = roles[newRole];
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;