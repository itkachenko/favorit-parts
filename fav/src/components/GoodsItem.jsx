import { useDispatch, useSelector } from 'react-redux';
import { fetchGoodsData } from '../store/goods-actions';

function GoodsItem({ item, isMain }) {
  const dispatch = useDispatch();
  const { fullView } = useSelector((state) => state.goods);

  function handleClick() {
    dispatch(fetchGoodsData(item.number, item.brand));
  }

  return (
    <>
      {!fullView && (
        <button type="button" className="btn btn-link" onClick={handleClick}>
          {item.brand}
        </button>
      )}
      {isMain && fullView && <p className="h1">{item.name}</p>}
      {!isMain && (
        <button
          type="button"
          className="btn btn-link px-0 btn-lg"
          onClick={handleClick}
        >
          {item.brand}
        </button>
      )}
      {fullView && (
        <>
          <p>
            Производитель: <span className="fw-bold">{item.brand}</span>
          </p>
          <p>
            Количество: <span className="fw-bold">{item.count}</span>
          </p>
          <p>
            Цена:{' '}
            <span className="fw-bold p-1 mb-2 bg-success text-white rounded">
              {item.price} ₽
            </span>
          </p>
        </>
      )}
    </>
  );
}

export default GoodsItem;
