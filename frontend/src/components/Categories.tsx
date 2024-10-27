'use client';
import CategoryLink from '@/components/CategoryLink';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store/store';
import { fetchCategories } from '@/redux/features/categories/categoriesSlice';
import {
  fetchCatalogItems,
  setShowMoreFlag,
  setCategoryId,
  setOffset,
  setSaerchText,
} from '@/redux/features/catalog/catalogSlice';
import Preloader from './Preloader';
import { useEffect, useState } from 'react';

interface CategoryItem {
  id: number;
  title: string;
}
export default function Categories() {
  const categories = useSelector(
    (state: RootState) => state.categories.categories,
  );
  const categoryId = useSelector(
    (state: RootState) => state.catalog.categoryId,
  );
  const loading = useSelector((state: RootState) => state.categories.isLoading);
  const [activeItem, setActiveItem] = useState('Все');
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  });

  const chooseCategoryClick = (id: string, category: string) => {
    setActiveItem(category);
    dispatch(setShowMoreFlag(true));
    if (categoryId !== +id) {
      dispatch(setOffset());
      dispatch(setCategoryId(id));
      dispatch(setSaerchText(''));
      dispatch(fetchCatalogItems({ category: +id, offset: 0 }));
    }
  };

  return (
    <div>
      <h2 className="text-center">Каталог</h2>
      {!loading ? (
        <Preloader style={{ height: '100px' }} />
      ) : (
        <ul className="catalog-categories nav justify-content-center">
          <CategoryLink
            style={
              activeItem === 'Все' ? { color: 'red' } : { color: 'inherit' }
            }
            clickHandler={chooseCategoryClick}
            id={'0'}
          >
            Все
          </CategoryLink>

          {categories?.map((category: CategoryItem, index: number) => (
            <CategoryLink
              style={
                activeItem === category.title
                  ? { color: 'red' }
                  : { color: 'inherit' }
              }
              clickHandler={chooseCategoryClick}
              id={category.id.toString()}
              key={index}
            >
              {category.title}
            </CategoryLink>
          ))}
        </ul>
      )}
    </div>
  );
}
