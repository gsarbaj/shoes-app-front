import React from "react";
import { Link } from "gatsby";
import { Input, Button } from "antd";
import { FaDolly, FaRegHeart, FaRegListAlt, FaRegUser } from "react-icons/all";
import { FaAlignRight } from "react-icons/fa";
import logo from "../../src/assets/images/logo.png";

const { Search } = Input;
const onSearch = value => console.log(value);

const Nav = (props) => {

  return (
    <div className={"nav"}>
      <div className={"usermenu"}>
        <Link to={"/"}>
          <img src={logo} alt={"Обувь оптом от производителя"} width={"217"} height={"48"} className="logo" />
        </Link>
        <Search
          placeholder="Поиск..."
          allowClear
          enterButton
          onSearch={onSearch}
          style={{ width: 300 }}
          className="search-field"
        />
        {/*<input className={'searchform__input'} type="search" results={5} placeholder={"Поиск..."}/>*/}
        <ul>
          <li><Link to={"/"}>
            <FaRegUser className="catalog-link__icon" />
            Личный кабинет</Link></li>
          <li><Link to={"/"}>
            <FaRegHeart className="catalog-link__icon" />
            Избранное</Link></li>
          <li><Link to={"/"}>
            <FaRegListAlt className="catalog-link__icon" />
            Заказы</Link></li>
          <li><Link to={"/"}>
            <FaDolly className="catalog-link__icon" />
            0,00 ₽</Link>
          </li>
        </ul>
      </div>
      <nav className={"mainnav"}>

        <Button
          value="default"
          icon={<FaAlignRight className="catalog-link__icon" />}
        >Каталог</Button>

        {/*<button className="catalog-link">*/}
        {/*  <FaAlignRight className="catalog-link__icon"/>*/}
        {/*   Каталог</button>*/}
        <ul>
          <li><Link to={"/"}>Мужская обувь</Link></li>
          <li><Link to={"/"}>Женская обувь</Link></li>
          <li><Link to={"/"}>Детская обувь</Link></li>
          <li><Link to={"/"}>Спортивная обувь</Link></li>
          <li><Link to={"/"}>Новинки</Link></li>
          <li><Link className={"aActive"} to={"/"}>Акции</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;