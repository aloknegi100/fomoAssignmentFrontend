import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCryptoData: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setCryptoData, setStatus } = cryptoSlice.actions;
export default cryptoSlice.reducer;
