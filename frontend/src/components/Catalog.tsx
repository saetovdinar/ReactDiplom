'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store/store';
import { fetchCatalogItems } from '@/redux/features/catalog/catalogSlice';
import { fetchProductById } from '@/redux/features/product/productSlice';

import { useEffect } from 'react';
import Preloader from '@/components/Preloader';
interface CatalogItem {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: number;
}

export default function Catalog() {
  //отслеживаем состояние каталога для рендера
  const catalog = useSelector((state: RootState) => state.catalog.catalog);
  const loading = useSelector((state: RootState) => state.catalog.isLoading);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (catalog.length === 0) {
      dispatch(fetchCatalogItems({ category: 0, offset: 0 }));
    }
  }, []);

  const orderBtnClickHandler = (id: number) => {
    dispatch(fetchProductById(id));
  };

  return (
    <>
      {!loading ? (
        <Preloader style={{}} />
      ) : (
        <div className="row">
          {catalog?.map((item: CatalogItem) => (
            <div className="col-4" key={item.id}>
              <div className="card catalog-item-card">
                <div className="card-img_cont">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={item?.images?.[0]}
                    className="card-img-top img-fluid"
                    alt="Босоножки 'MYER'"
                  />
                </div>

                <div className="card-body">
                  <p className="card-text">{item.title}</p>
                  <p className="card-text">{item.price} руб.</p>
                  <Link
                    href="/products"
                    className="btn btn-outline-primary"
                    onClick={() => orderBtnClickHandler(item.id)}
                  >
                    Заказать
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
