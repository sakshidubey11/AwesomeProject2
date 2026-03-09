import { createSlice } from '@reduxjs/toolkit';
import { fetchAccounts } from './accountThunk';

const accountSlice = createSlice({
  name: 'accounts',

  initialState: {
    accounts: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: builder => {
    builder

      .addCase(fetchAccounts.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.loading = false;
        state.accounts = action.payload;
      })

      .addCase(fetchAccounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default accountSlice.reducer;
