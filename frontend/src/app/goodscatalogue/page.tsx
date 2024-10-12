'use client'
import Search from '@components/Search';
import Image from 'next/image';
import MainHeader from '@components/MainHeader';
import MainFooter from '@components/MainFooter';
import Banner from '@/img/banner.jpg';
import Catalog from '@components/Catalog';
import Categories from '@components/Categories';
import ShowMore from '@components/ShowMore';
export default function Home() {
	return (
		<>
	
    <MainHeader />
    <main className="container">
      <div className="row">
        <div className="col">
          <header className="banner">
            <Image src={Banner} className="img-fluid" alt="К весне готовы!"/>
            <h2 className="banner-header">К весне готовы!</h2>
          </header>

          <section className="catalog">
          <Search/>
          <Categories/>
          <Catalog/>
          <ShowMore/>
          </section>
        </div>
      </div>
    </main>

   <MainFooter />
			
		</>
	);
}
