'use client';
import CategoryLink from '@/components/CategoryLink';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store/store';
import {fetchCategories} from '@/redux/features/categories/categoriesSlice';
import { fetchCatalogItems,setCategoryId, setOffset, setSaerchText } from '@/redux/features/catalog/catalogSlice';
import Preloader from './Preloader';
import { useEffect } from 'react';


interface CategoryItem {
  id: number;
  title: string;
}
export default function Categories() {
  const categories = useSelector((state: RootState) => state.categories.categories);
  const categoryId = useSelector((state: RootState) => state.catalog.categoryId);
  const loading = useSelector((state: RootState) => state.categories.isLoading);
 
  const dispatch: AppDispatch = useDispatch();

   ;
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, []);

  const chooseCategoryClick = (id: string) => {
    
    if(categoryId !== +id) {
      dispatch(setOffset())
      dispatch(setCategoryId(id))
      dispatch(setSaerchText(''))
      dispatch(fetchCatalogItems({category: +id, offset: 0}))
     
    }
    
  }
  if (!loading) {
    return <Preloader />; // Заглушка при загрузке данных
  }


    return (
        <div>
        <h2 className="text-center">Каталог</h2>
        <ul className="catalog-categories nav justify-content-center">
            <CategoryLink 
            clickHandler={chooseCategoryClick}  
            id={'0'} 
            >
              Все
            </CategoryLink>

          {categories?.map((category: CategoryItem, index: number) => (
            <CategoryLink 
            clickHandler={chooseCategoryClick}   
            id={category.id.toString()} 
            key={index}>
              {category.title}
            </CategoryLink>
           
            
          ))}
        </ul>
        </div>
    )
}

   