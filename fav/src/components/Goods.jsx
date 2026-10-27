import { useSelector } from 'react-redux';
import GoodsItem from './GoodsItem';

function Goods() {
  const { items, loading, error } = useSelector((state) => state.goods);

  function renderGoods(good, isMain) {
    return (
      <li key={good.goodsID} className="list-group-item">
        <GoodsItem item={good} isMain={isMain} />

        {good.analogues && (
          <>
            <p className='h2'>Аналоги:</p>
            <ul>
              {good.analogues.map((analogue) => renderGoods(analogue, false))}
            </ul>
          </>
        )}
      </li>
    );
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && items.length > 0 && (
        <ul className="list-group">
          {items.map((item) => renderGoods(item, true))}
        </ul>
      )}
    </>
  );
}

export default Goods;
