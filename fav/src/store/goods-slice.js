import { createSlice } from '@reduxjs/toolkit';

const initialGoodsState = {
  items: [],
  loading: false,
  error: null,
  fullView: false,
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState: initialGoodsState,
  reducers: {
    updateGoods(state, action) {
      state.items = action.payload.items;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    showFullGood(state, action) {
      state.fullView = action.payload;
    }
  },
});

export const goodsActions = goodsSlice.actions;

export default goodsSlice;
