'use client';
import bg from '@/img/footer-sprite.png';
import Link from 'next/link';

export default function Preloader() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <section>
            <h5>Информация</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/info" className="nav-link">
                  О магазине
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/goodscatalogue" className="nav-link">
                  Каталог
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contacts" className="nav-link">
                  Контакты
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="col">
          <section>
            <h5>Принимаем к оплате:</h5>
            <div className="footer-pay">
              <div
                className="footer-pay-systems footer-pay-systems-paypal"
                style={{ backgroundImage: `url(${bg.src})` }}
              ></div>
              <div
                className="footer-pay-systems footer-pay-systems-master-card"
                style={{ backgroundImage: `url(${bg.src})` }}
              ></div>
              <div
                className="footer-pay-systems footer-pay-systems-visa"
                style={{ backgroundImage: `url(${bg.src})` }}
              ></div>
              <div
                className="footer-pay-systems footer-pay-systems-yandex"
                style={{ backgroundImage: `url(${bg.src})` }}
              ></div>
              <div
                className="footer-pay-systems footer-pay-systems-webmoney"
                style={{ backgroundImage: `url(${bg.src})` }}
              ></div>
              <div
                className="footer-pay-systems footer-pay-systems-qiwi"
                style={{ backgroundImage: `url(${bg.src})` }}
              ></div>
            </div>
          </section>
          <section>
            <div className="footer-copyright">
              2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
              аксессуаров. Все права защищены.Доставка по всей России!
            </div>
          </section>
        </div>
        <div className="col text-right">
          <section className="footer-contacts">
            <h5>Контакты:</h5>
            <Link className="footer-contacts-phone" href="tel:+7-495-790-35-03">
              +7 495 79 03 5 03
            </Link>
            <span className="footer-contacts-working-hours">
              Ежедневно: с 09-00 до 21-00
            </span>
            <Link
              className="footer-contacts-email"
              href="mailto:office@bosanoga.ru"
            >
              office@bosanoga.ru
            </Link>
            <div className="footer-social-links">
              <div className="footer-social-link footer-social-link-twitter"></div>
              <div className="footer-social-link footer-social-link-vk"></div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
