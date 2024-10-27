'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store/store';
import { fetchTopSales } from '@/redux/features/sale.hits/topSalesSlice';
import { useEffect } from 'react';
import Preloader from '@/components/Preloader';
import { fetchProductById } from '@/redux/features/product/productSlice';
// типизация данных о товаре в каталоге
interface CatalogItem {
  id: number;
  title: string;
  price: number;
  images: string[];
  name: string;
}
// компонент для отображения хитов продаж
export default function TopSales() {
  // Используем useSelector для получения данных с сервера о хит-товарах из Redux
  const data = useSelector((state: RootState) => state.topSales.sales);
  // Используем useSelector для получения состояния загрузки данных
  const loading = useSelector((state: RootState) => state.topSales.isLoading);
  const dispatch: AppDispatch = useDispatch();

  // обработчик нажатия на кнопку "Заказать"
  const orderBtnClickHandler = (id: number) => {
    dispatch(fetchProductById(id));
  };
  // Используем useEffect для загрузки данных с сервера в  Redux
  useEffect(() => {
    dispatch(fetchTopSales());
  }, []);

  return (
    <>
      {/* Если данные еще не загружены, показываем прелоадер */}
      {!loading ? (
        <Preloader style={{}} />
      ) : data?.length === 0 ? (
        /*Если пришел пустой массив, то показываем пустой блок*/
        <></>
      ) : (
        <section className="top-sales">
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
                    <Link
                      onClick={() => orderBtnClickHandler(item.id)}
                      href={`/products`}
                      className="btn btn-outline-primary"
                    >
                      Заказать
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
