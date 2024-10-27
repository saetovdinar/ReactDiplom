'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store/store';
import {
  setSaerchText,
  fetchSearchItem,
  setCatalog,
} from '@/redux/features/catalog/catalogSlice';
export default function Search({
  onBlur,
}: {
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}) {
  const searcValue = useSelector(
    (state: RootState) => state.catalog.searchText,
  );
  const categoryId = useSelector(
    (state: RootState) => state.catalog.categoryId,
  );
  const dispatch: AppDispatch = useDispatch();
  //фиксируем ввод в redux
  const onChangeHandler = (value: string) => {
    dispatch(setSaerchText(value));
  };
  //выполняем запрос с  учетом ввода пользователя
  const onSubmitHandler = () => {
    dispatch(setCatalog([]));
    dispatch(
      fetchSearchItem({ category: categoryId, offset: 0, q: searcValue }),
    );
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitHandler();
      }}
      className="catalog-search-form form-inline"
    >
      <input
        onBlur={onBlur}
        onChange={(e) => onChangeHandler((e.target as HTMLInputElement).value)}
        value={searcValue}
        className="form-control"
        placeholder="Поиск"
      />
    </form>
  );
}
