'use client';
import Image from 'next/image';
import HeaderLogo from '@/img/header-logo.png';
import Link from 'next/link';
import bg from '@/img/header-controls-sprite.png';
import Search from './Search';
import { useState } from 'react';
export default function Preloader() {
    const [show, setShow] = useState(false);
    const showOnIconClick = (e: React.MouseEvent<HTMLDivElement>) => 
        {
            e.preventDefault();
            setShow(!show);
            (e.target as HTMLDivElement).style.display = 'none';
        }
    return (
        
       	
      <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" href="/">
            <Image
            src={HeaderLogo}
            alt="Bosa Noga"/>
            </Link>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" href="/">Главная</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/goodscatalogue">Каталог</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/info">О магазине</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contacts">Контакты</Link>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics" >
                  {show && <Search />}
                    
                  
                <div 
                    onClick={showOnIconClick}
                    data-id="search-expander" 
                    className="header-controls-pic header-controls-search"
                    style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundPosition: `32px 0px`,
                  }}
                >
                    
                </div>
                  
                  <div 
                  className="header-controls-pic header-controls-cart"
                  style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundPosition: `90px 0px`,
                  }}
                  >
                    <div className="header-controls-cart-full"></div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                  <input className="form-control" placeholder="Поиск"/>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    )
}
   
   
 