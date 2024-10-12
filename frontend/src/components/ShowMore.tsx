'use client';
import {fetchGetItemByCatalog, incrementOffset, fetchSearchItem} from '@/redux/features/catalog/catalogSlice';
import {useSelector, useDispatch} from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store/store';
export default function ShowMore() {
  const dispatch: AppDispatch = useDispatch();
  const category = useSelector((state: RootState) => state.catalog.categoryId);
  const offset = useSelector((state: RootState) => state.catalog.offset);
  const serachValue = useSelector((state: RootState) => state.catalog.searchText);


  const loadMoreClickHandler = () => {
    if(serachValue !== '') {
      dispatch(incrementOffset());
      dispatch(fetchSearchItem({category: category, offset: offset, q: serachValue}));
     
      return;
    } 

    
    dispatch(incrementOffset());

    dispatch(fetchGetItemByCatalog({category: category, offset: offset}));
   
   
  }
  return (
      <div className="text-center">
        <button onClick={loadMoreClickHandler} className="btn btn-outline-primary">Загрузить ещё</button>
      </div> 

    )
}
   
   
 