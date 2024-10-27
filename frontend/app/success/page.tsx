'use client';
import Image from 'next/image';
import Banner from '@/img/banner.jpg';
import MainHeader from '@components/MainHeader';
import MainFooter from '@components/MainFooter';

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
            <section className="top-sales">
              <p>Success!</p>
            </section>
          </div>
        </div>
      </main>

      <MainFooter />
    </>
  );
}
