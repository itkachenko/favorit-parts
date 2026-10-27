import { configureStore } from '@reduxjs/toolkit';
import goodsSlice from './goods-slice';

const store = configureStore({
  reducer: { goods: goodsSlice.reducer },
});

export default store;
