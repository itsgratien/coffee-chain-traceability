import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Me {
  person: { id: string; email: string; phone_number?: string };
}

interface AccountState {
  me: Me;
}
const initialState: Partial<AccountState> = {};

const accountSlice = createSlice({
  initialState,
  reducers: {
    setMe: (state, action: PayloadAction<Me>) => ({
      ...state,
      me: action.payload,
    }),
  },
  name: 'accountSlice',
});

export const accountReducer = accountSlice.reducer;

export const { setMe } = accountSlice.actions;
