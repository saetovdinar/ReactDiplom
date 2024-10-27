'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { useDispatch } from 'react-redux';
import {
  deleteProductFromBasket,
  setBasket,
} from '@/redux/features/basket/basketSlice';
import { selectTotalPrice } from '@/redux/reselect/reselect';

export default function BasketCart() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.basket.basket);
  const totalSumm = useSelector(selectTotalPrice);

  useEffect(() => {
    const basketData = localStorage.getItem('basket');
    if (basketData) {
      const parsedBasket = JSON.parse(basketData);
      dispatch(setBasket(parsedBasket)); // действие, которое добавляет корзину в store
    }
  }, [dispatch]);

  const delteProductHandler = (id: number) => {
    dispatch(deleteProductFromBasket(id));
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Кол-во</th>
          <th scope="col">Стоимость</th>
          <th scope="col">Итого</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td scope="row">{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.size}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.price * item.quantity}</td>
              <td>
                <button
                  onClick={() => {
                    delteProductHandler(item.id);
                  }}
                  className="btn btn-outline-danger btn-sm"
                >
                  Удалить
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={5} className="text-right">
            Общая стоимость
          </td>
          <td>{totalSumm}</td>
        </tr>
      </tbody>
    </table>
  );
}
