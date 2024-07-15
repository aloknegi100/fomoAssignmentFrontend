import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cryptoList: [],
  cryptoData: [],
  error: null,

};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCryptoList: (state, action) => {
      state.cryptoList = action.payload;
    },
    setCryptoData: (state, action) => {
      state.cryptoData = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
  },
  },
});

export const { setCryptoList, setCryptoData,setError } = cryptoSlice.actions;
export default cryptoSlice.reducer;
