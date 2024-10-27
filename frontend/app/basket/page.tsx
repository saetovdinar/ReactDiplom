'use client';
import MainHeader from '@components/MainHeader';
import MainFooter from '@components/MainFooter';
import Image from 'next/image';
import BasketOrder from '@app/basket/ui/BasketOrder';
import BasketCart from '@app/basket/ui/BasketCart';
import Banner from '@/img/banner.jpg';

export default function Home() {
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
            <section className="cart">
              <h2 className="text-center">Корзина</h2>
              <BasketCart />
            </section>

            <BasketOrder />
          </div>
        </div>
      </main>
      <MainFooter />
    </>
  );
}
