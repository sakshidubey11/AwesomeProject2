import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAccountsApi } from '../../services/api';

export const fetchAccounts = createAsyncThunk(
  'accounts/fetchAccounts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAccountsApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
