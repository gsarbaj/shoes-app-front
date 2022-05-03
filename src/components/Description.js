import React from 'react';
import {StaticImage} from "gatsby-plugin-image"

const Description = () => {
  return(
    <section className="desc">
      <div className={'wrapper wrapper__desc'}>
        <h2>Почему обувь Марко так популярна в России?</h2>
        <div className="desc__wrapper">
          <StaticImage src={'../assets/images/MarkoShop.jpeg'} alt="Обувь Марко" width={550} height={412} placeholder={'tracedSVG'}/>
          <div>
            <h3>Качество</h3>
            <p>Настоящее Беларусское качество. Производство более 4 000 000 пар в год. Узнаваемость и доверие к беларуской продукции по всей России</p>
            <h3>Опыт</h3>
            <p>30 лет опыта в производстве и продаже обуви. 165 фирменых магазинов в России, Казахстане и Беларуси. Крупнейший производитель обуви в СНГ</p>
            <h3>Инновационный подход</h3>
            <p>Постоянный анализ продаж позволяют производить и предлагать оптовым клиентам только самую востребованую продукцию</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Description