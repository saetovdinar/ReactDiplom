'use client';
import {
  fetchGetItemByCatalog,
  incrementOffset,
  fetchSearchItem,
  setSaerchText,
} from '@/redux/features/catalog/catalogSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store/store';

export default function ShowMore() {
  const dispatch: AppDispatch = useDispatch();
  const showMoreFlag = useSelector(
    (state: RootState) => state.catalog.showMoreFlag,
  );
  const category = useSelector((state: RootState) => state.catalog.categoryId);
  const offset = useSelector((state: RootState) => state.catalog.offset);
  const serachValue = useSelector(
    (state: RootState) => state.catalog.searchText,
  );

  const loadMoreClickHandler = () => {
    if (serachValue !== '') {
      dispatch(
        fetchSearchItem({ category: category, offset: offset, q: serachValue }),
      ).then(() => {
        dispatch(setSaerchText(''));
        dispatch(incrementOffset());
      });

      return;
    }

    dispatch(
      fetchGetItemByCatalog({ category: category, offset: offset }),
    ).then(() => {
      dispatch(incrementOffset());
    });
  };

  return (
    <div className="text-center">
      {showMoreFlag && (
        <button
          onClick={loadMoreClickHandler}
          className="btn btn-outline-primary"
        >
          Загрузить ещё
        </button>
      )}
    </div>
  );
}
