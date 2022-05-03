import React from 'react';
import { BackTop } from "antd";
import { UpCircleOutlined, UpOutlined } from "@ant-design/icons"
import { Link } from "gatsby";

const Footer = () => {
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#f40e01',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    };

    return (
      <footer className={'footer'}>
          <div className={'footer__wrapper'}>
              <div className={'wrapper wrapper__footer'}>
                  <div>
                      <h4>Партнерам</h4>
                      <ul>
                          <li><Link to={'/'}>Зарегистрироваться</Link></li>
                          <li><Link to={'/'}>Условия</Link></li>
                          <li><Link to={'/'}>Возможности</Link></li>
                          <li><Link to={'/'}>Правила</Link></li>
                      </ul>
                  </div>
                  <div>
                      <h4>Компания</h4>
                      <ul>
                          <li><Link to={'/company/history'}>История</Link></li>
                          <li><Link to={'/news'}>Новости</Link></li>
                          <li><Link to={'/company/jobs'}>Вакансии</Link></li>
                          <li><Link to={'/company/shops'}>Магазины</Link></li>
                      </ul>
                  </div>
                  <div>
                      <h4>Продукция</h4>
                      <ul>
                          <li><Link to={'/catalog/child-shoes'}>Детская Обувь</Link></li>
                          <li><Link to={'/catalog/man-shoes'}>Мужская Обувь</Link></li>
                          <li><Link to={'/catalog/woman-shoes'}>Женская Обувь</Link></li>
                          <li><Link to={'/catalog/sport-shoes'}>Спортивная Обувь</Link></li>
                      </ul>
                  </div>
                  <div>
                      <h4>Контакты</h4>
                      <ul>
                          <li><Link to={'/'}>Отдел Продаж</Link></li>
                          <li><Link to={'/'}>Закупки</Link></li>
                          <li><Link to={'/'}>Реквизиты</Link></li>
                          <li><Link to={'/'}>Доставка</Link></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className={'footer__copyright'}>
              <div className={'wrapper'}>
                  <span>Разработка и Продвижение с любовью <a href="https://imta.icu" target={'_blank'}>imta.icu</a></span>
              </div>
          </div>

          <BackTop>
              <div style={style}><UpOutlined /></div>
          </BackTop>

      </footer>
    );
};

export default Footer;