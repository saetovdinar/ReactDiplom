'use client';
import Image from 'next/image';
import Banner from '@/img/banner.jpg';
import MainHeader from '@components/MainHeader';
import MainFooter from '@components/MainFooter';
import Link from 'next/link';
import Preloader from '@/components/Preloader';
import Size from '@app/products/ui/Size';
import {
  incrementQuantity,
  setIsSelectedSlice,
  decrementQuantity,
  setQuantity,
} from '@/redux/features/product/productSlice';
import { setProductToBasket } from '@/redux/features/basket/basketSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store/store';

export default function ProductPage() {
  const data = useSelector((state: RootState) => state.product.product);
  const loading = useSelector((state: RootState) => state.product.isLoading);
  const quantity = useSelector((state: RootState) => state.product.quantity);
  const isSelectedSize = useSelector(
    (state: RootState) => state.product.isSelected,
  );
  const size = useSelector((state: RootState) => state.product.choosenSize);

  const dispatch: AppDispatch = useDispatch();

  const setProductInBasket = () => {
    dispatch(
      setProductToBasket({
        quantity: quantity,
        title: data.title,
        size: size,
        price: data.price,
        id: data.id,
      }),
    );
    dispatch(setQuantity());
    dispatch(setIsSelectedSlice(false));
  };

  if (!loading) {
    return <Preloader style={{}} />; // Заглушка при загрузке данных
  }

  return (
    <>
      <MainHeader />
      <main className="container">
        <div className="row">
          <div className="col">
            <div className="banner">
              <Image src={Banner} className="img-fluid" alt="К весне готовы!" />
              <h2 className="banner-header">К весне готовы!</h2>
            </div>

            <section className="catalog-item">
              <h2 className="text-center">{data.title}</h2>
              <div className="row">
                <div className="col-5">
                  <Image
                    width={300}
                    height={400}
                    src={data?.images?.[0]}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-7">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Артикул</td>
                        <td>{data.sku}</td>
                      </tr>
                      <tr>
                        <td>Производитель</td>
                        <td>{data.manufacturer}</td>
                      </tr>
                      <tr>
                        <td>Цвет</td>
                        <td>{data.color}</td>
                      </tr>
                      <tr>
                        <td>Материалы</td>
                        <td>{data.material}</td>
                      </tr>
                      <tr>
                        <td>Сезон</td>
                        <td>{data.season}</td>
                      </tr>
                      <tr>
                        <td>Повод</td>
                        <td>{data.reason}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-center">
                    <p>
                      Размеры в наличии:{' '}
                      {data?.sizes?.map((item, index: number) => {
                        if (item.available === false) return;

                        return <Size key={index}>{item.size}</Size>;
                      })}
                    </p>

                    {data?.sizes?.every((size, index, arr) => {
                      if (arr.length === 0) return false;
                      if (size.available === true) return true;
                      return true;
                    }) ? (
                      <span className="btn-group btn-group-sm pl-2">
                        Количество:
                        <button
                          onClick={() => dispatch(decrementQuantity())}
                          className="btn btn-secondary"
                        >
                          -
                        </button>
                        <span className="btn btn-outline-primary">
                          {quantity}
                        </span>
                        <button
                          onClick={() => dispatch(incrementQuantity())}
                          className="btn btn-secondary"
                        >
                          +
                        </button>
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                  {data?.sizes?.every((size, index, arr) => {
                    if (arr.length === 0) return false;
                    if (size.available === true) return true;
                    return true;
                  }) && isSelectedSize ? (
                    <Link
                      onClick={setProductInBasket}
                      href="/basket"
                      className="btn btn-danger btn-block btn-lg"
                    >
                      В корзину
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <MainFooter />
    </>
  );
}
