'use client';
import { useState } from 'react';
import { AppDispatch } from '@/redux/store/store';
import { useDispatch } from 'react-redux';
import { setSize } from '@/redux/features/product/productSlice';
import { setIsSelectedSlice } from '@/redux/features/product/productSlice';
export default function Size({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const dispatch: AppDispatch = useDispatch();
  //selected стиль при клике
  const [isSelected, setIsSelected] = useState(false);
  const contentClassname = isSelected
    ? 'catalog-item-size' + ' selected'
    : 'catalog-item-size';

  const clickHandler = () => {
    if (isSelected) {
      dispatch(setIsSelectedSlice(false));
    } else {
      dispatch(setIsSelectedSlice(true));
    }
    setIsSelected(!isSelected);
    dispatch(setSize(children));
  };

  return (
    <span onClick={clickHandler} className={contentClassname}>
      {children}
    </span>
  );
}
