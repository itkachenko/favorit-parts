import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoodsData } from '../store/goods-actions';

function SearchForm() {
  const lastChange = useRef();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.goods);

  function handleChange(event) {
    const value = event.target.value;

    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      dispatch(fetchGoodsData(value));
    }, 500);
  }

  return (
    <input
      className={`form-control ${error && 'border-danger'}`}
      name="search"
      type="search"
      placeholder="Search"
      onChange={handleChange}
    />
  );
}

export default SearchForm;
