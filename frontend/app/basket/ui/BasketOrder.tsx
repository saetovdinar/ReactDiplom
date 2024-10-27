'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postOrder } from '@/api/app_api';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { useDispatch } from 'react-redux';
import { setBasket } from '@/redux/features/basket/basketSlice';
import Preloader from '@/components/Preloader';
export default function BasketOrder() {
  const [load, setLoad] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ phone: '', address: '' });
  const data = useSelector((state: RootState) => state.basket.basket);
  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);
    postOrder({
      owner: formData,
      items: data.map((item) => ({
        id: item.id,
        price: item.price,
        count: item.quantity,
      })),
    }).then(
      () => {
        localStorage.removeItem('basket');
        dispatch(setBasket([]));
        setFormData({ phone: '', address: '' });
        setLoad(false);
        router.push('/success');
      },
      (error) => console.log(error.message),
    );
  };

  return (
    <>
      {load ? (
        <Preloader />
      ) : (
        <section className="order">
          <h2 className="text-center">Оформить заказ</h2>
          <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
            <form onSubmit={submitForm} className="card-body">
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  onChange={changeInputHandler}
                  value={formData.phone}
                  name="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Ваш телефон"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Адрес доставки</label>
                <input
                  onChange={changeInputHandler}
                  value={formData.address}
                  name="address"
                  className="form-control"
                  id="address"
                  placeholder="Адрес доставки"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreement"
                />
                <label className="form-check-label" htmlFor="agreement">
                  Согласен с правилами доставки
                </label>
              </div>
              <button type="submit" className="btn btn-outline-secondary">
                Оформить
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
