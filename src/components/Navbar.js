import React from "react";
import { FaEnvelope, FaFacebookF, FaTelegramPlane, FaViber, FaVk, FaWhatsapp } from "react-icons/fa";
import { Link } from "gatsby";
import Nav from "./Nav";


const Navbar = () => {

  return (
    <header>
      <div className={"header"}>
        <a href="tel:+74993500794" title="Позвонить" className={"header__tel"}>
          +7 (499) 350-07-94
        </a>
        <div className={"socials"}>
          <a href="https://t.me/Marko_Obuv_bot" target="_blank" rel="noreferrer" title="Написать в Telegram">
            <FaTelegramPlane />
          </a>
          <a href={"/"} target="_blank" rel="noreferrer" title="Написать в Whatsapp">
            <FaWhatsapp />
          </a>
          <a href={"/"} target="_blank" rel="noreferrer" title="Написать в Facebook">
            <FaFacebookF />
          </a>
          <a href="viber://pa?chatURI=obuv_optom" target="_blank" rel="noreferrer" title="Написать в Viber">
            <FaViber />
          </a>
          <a href={"/"} target="_blank" rel="noreferrer" title="Написать в ВКонтакте">
            <FaVk />
          </a>
          <a href="mailto:info@marko-opt.ru?subject=Хочу узнать подробнее" rel="noreferrer"
             title="Написать на эл. почту">
            <FaEnvelope />
          </a>
        </div>
        <ul className={"header__menu"}>
          <li><Link to={"/company"}>О компании</Link></li>
          <li><Link to={"/brands"}>Бренды</Link></li>
          <li><Link to={"/partners"}>Партнерам</Link></li>
          <li><Link to={"/delivery"}>Доставка</Link></li>
          <li><Link to={"/contact"}>Контакты</Link></li>
        </ul>

      </div>
      <Nav />
    </header>
  );
};

export default Navbar;