'use client';
import MainHeader from '@components/MainHeader';
import MainFooter from '@components/MainFooter';
import Image from 'next/image';

import Banner from '@/img/banner.jpg';

export default function NotFound() {
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
            <section className="top-sales">
              <h2 className="text-center">Страница не найдена</h2>
              <p>Извините, такая страница не найдена!</p>
            </section>
          </div>
        </div>
      </main>

      <MainFooter />
    </>
  );
}
