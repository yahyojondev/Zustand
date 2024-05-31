import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <div className="footer__top__wrapper">
              <h3>Покупателям</h3>
              <NavLink>Поддержка</NavLink>
              <NavLink>Календарь распродаж</NavLink>
              <NavLink>Гид по AliExpress</NavLink>
            </div>
            <div className="footer__top__wrapper">
              <h3>Партнёрам</h3>
              <NavLink>Продавайте на AliExpress</NavLink>
              <NavLink>Аффилиатная программа</NavLink>
              <NavLink>Блог для продавца</NavLink>
            </div>
            <div className="footer__top__wrapper">
              <h3>О компании</h3>
              <NavLink>Пресс-центр</NavLink>
              <NavLink>AliTech</NavLink>
              <NavLink>Блог о жизни компании</NavLink>
            </div>
            <div className="footer__top__wrapper">
              <h3>Мы в соцсетях</h3>
              <NavLink>Вконтакте</NavLink>
              <NavLink>Одноклассники</NavLink>
              <NavLink>Telegram</NavLink>
              <NavLink>Дзен</NavLink>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom__wrapper">
              <NavLink>© AliExpress®</NavLink>
              <NavLink> 2019 – 2024</NavLink>
            </div>

            <div className="footer__bottom__wrapper">
              <NavLink>На информационном ресурсе</NavLink>
              <NavLink>применяются рекомендательные технологии</NavLink>
            </div>
            <div className="footer__bottom__wrapper">
              <NavLink>Политика конфиденциальности</NavLink>
              <NavLink>Пользовательские соглашения</NavLink>
            </div>
            <div className="footer__bottom__wrapper footer__app">
              <p>Google play</p>
              <p>App store</p>
              <p>AppGalery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
