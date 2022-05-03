import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo"
import LineForm from "../../components/LineForm"
import ProductTypes from "../../components/ProductTypes"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Form, Input, Modal, Select } from "antd"
import { useForm } from "@formspree/react"
import News from "../../components/News"
import Description from "../../components/Description"
import FormSection from "../../components/FormSection"
import Article from "../../components/Article"

const { Option } = Select


const PromoTemplate = ({ data }) => {

  const {url, title, subTitle, description, picture, callToActionTitle, callToActionUrl} = data.contentfulPromo

  console.log(data)


  const [telInput, seTelInput] = useState(null);
  const [msg, setMsg] = useState('');
  const [state, handleSubmit] = useForm("mwkaalpj");
  if (state.succeeded) {}

  const [isModalVisible, setIsModalVisible] = useState(false);


  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    if (!values.prefix){
      values['prefix'] = '7'
    }
    values['Телефон'] = '+' + values.prefix + values.tel
    console.log('Success:', values)
    handleSubmit(values).then()
    setMsg('Форма Отправлена')
    setTimeout(handleCancel, 2000)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select  style={{ width: 80 }}>
        <Option value="7">+7</Option>
        <Option value="375">+375</Option>
        <Option value="380">+380</Option>
      </Select>
    </Form.Item>
  );

  const onChange = e => {
    const {value} = e.target
    const reg = /^-?\d*(\.\d*)?$/
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      seTelInput(value)
    }else{
      document.getElementById('basic_tel').value = telInput
      console.log(document.getElementById('basic_tel'))
      console.log(telInput)}}



  return (
    <>
      <Seo title={title} />

      <section className={'mainBanner'}>
        <div className={'wrapper wrapper__hero'}>
          <div className={'hero'}>
            <h1 className="promo__title">{title}</h1>
            <h2 className="promo__subtitle">{subTitle}</h2>
            <Button type="primary" onClick={showModal} size="large" className="hero-button">Скачать Каталог</Button>
            <Button type="primary" onClick={() => window.open(`${callToActionUrl}`)} size="large">{callToActionTitle}</Button>
            <p>Производство мужской, женской и детской обуви. Оптовая продажа с доставкой во все регионы России. Только для юридических лиц и ИП</p>
          </div>

          {/*<StaticImage src={'../assets/images/hero-img.jpg'} alt="Обувь оптом от производителя" width={700} className="hero-image"/>*/}
          <GatsbyImage alt={title} image={getImage(picture.gatsbyImageData)} width={700} className="hero-image"/>

        </div>
        <Modal title="Скачать Каталог Продукции" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} cancelText={'Отмена'} footer={null} className="hero-modal">
          <span>Введите адрес электронной почты и получите каталог продукции на почту</span>
          <div >
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
                prefix: '+7'
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Введите адресс эл. почты',
                    type: 'email'
                  },
                ]}
              >
                <Input placeholder={'E-mail'} size="large" allowClear/>
              </Form.Item>

              <Form.Item
                name="tel"
                rules={[
                  {
                    required: true,
                    message: 'Введите номер телефона',
                  },
                ]}
              >
                <Input
                  onChange={onChange}
                  placeholder={'Номер телефона'}
                  size="large"
                  addonBefore={prefixSelector}
                  style={{ width: '100%' }}
                  allowClear/>
              </Form.Item>


              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" size={'large'} block>
                  Скачать Каталог
                </Button>
                <span>{msg}</span>
              </Form.Item>
            </Form>


          </div>

        </Modal>
      </section>

      <ProductTypes />
      <News/>
      <Description />
      <LineForm />
      <div id={'offer'}><FormSection/></div>
      <Article/>

    </>

  );
}

export const query = graphql`
    query getSinglePromo($id: String) {
        contentfulPromo(id: {eq: $id}) {
           url
    title
    subTitle
    description
              callToActionTitle
              callToActionUrl
    picture {
      gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
           }
        }
    }
`


export default PromoTemplate;