import { goodsActions } from './goods-slice';

export const fetchGoodsData = (goodsNumber, goodsBrand) => {
  return async (dispatch) => {
    dispatch(goodsActions.setLoading(true));

    const fetchData = async () => {
      const baseUrl = 'https://api.favorit-parts.ru/hs/hsprice/';
      const key = '00000000-0000-0000-0000-000000000001';
      let url = `${baseUrl}?key=${key}`;

      if (goodsNumber) {
        url += `&number=${encodeURIComponent(goodsNumber)}`;
      }

      if (goodsBrand) {
        url += `&brand=${encodeURIComponent(goodsBrand)}&analogues=on`;
        dispatch(goodsActions.showFullGood(true));
      } else {
        dispatch(goodsActions.showFullGood(false));
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch data.');
      }

      const resData = await response.json();

      return resData;
    };

    try {
      const data = await fetchData();
      if (data.goods && data.goods.length === 1 && data.goods[0].brand === '') {
        dispatch(
          goodsActions.updateGoods({
            items: [],
          }),
        );
        dispatch(goodsActions.setError('Нет товаров с таким номером'));
      } else if (data.error) {
        dispatch(
          goodsActions.updateGoods({
            items: [],
          }),
        );
        dispatch(goodsActions.setError(data.error));
      } else {
        dispatch(
          goodsActions.updateGoods({
            items: data.goods || [],
          }),
        );
      }
    } catch (error) {
      dispatch(
        goodsActions.updateGoods({
          items: [],
        }),
      );
      dispatch(goodsActions.setError(error.message));
    }
  };
};
