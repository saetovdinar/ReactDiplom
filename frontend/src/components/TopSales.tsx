'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store/store';
import { fetchTopSales } from '@/redux/features/sale.hits/topSalesSlice';
import { useEffect } from 'react';
import Preloader from './Preloader';

interface CatalogItem {
  id: number;
  title: string;
  price: number;
  images: string[];
  name: string;
}

export default function TopSales() {
  const data = useSelector((state: RootState) => state.topSales.sales);
  const loading = useSelector((state: RootState) => state.topSales.isLoading);
  const dispatch: AppDispatch = useDispatch();

  // Используем useEffect для загрузки данных через Redux
  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchTopSales());
    }
  }, []);

  if (!loading) {
    return <Preloader />; // Заглушка при загрузке данных
  }

  return (
    <div className="row">
      <h2 className="text-center">Хиты продаж!</h2>
      {data?.map((item: CatalogItem) => (
        <div key={item.id} className="col-4">
          <div className="card">
            <Image
              alt={item.name || 'Top Sale Image'}
              src={item?.images?.[0]}
              width={300}
              height={400}
              className="card-img-top img-fluid"
            />
            <div className="card-body">
              <p className="card-text">{item.title}</p>
              <p className="card-text">{item.price} руб.</p>
              <Link href={`/products`} className="btn btn-outline-primary">
                Заказать
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
