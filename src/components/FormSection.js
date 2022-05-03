import React, { useState } from "react"
import { useForm, ValidationError } from '@formspree/react';
import { Button, Form, Input, Select } from "antd"
import { StaticImage } from "gatsby-plugin-image"
import { FaStar } from "react-icons/all"

const { Option } = Select





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




const FormSection = (props) => {

  const [telInput, seTelInput] = useState(null)
  const [msg, setMsg] = useState('')
  const [state, handleSubmit] = useForm("mwkaalpj");
  if (state.succeeded) {

  }

  const onFinish = (values) => {
    if (!values.prefix){
      values['prefix'] = '7'
    }
    values['Телефон'] = '+' + values.prefix + values.tel
    console.log('Success:', values)
    handleSubmit(values).then()
    setMsg('Форма Отправлена')
  }

  const onChange = e => {
    const {value} = e.target
    const reg = /^-?\d*(\.\d*)?$/
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      seTelInput(value)
    }else{
      document.getElementById('basic_tel').value = telInput
      console.log(document.getElementById('basic_tel'))
      console.log(telInput)}
  }



  return (
    <section id="form" className={'FormSection'}>
      <div className = {"wrapper wrapper__formSection"}>
        <div className={'ContactFormBig'}>
          <h4>Скачать каталог продукции</h4>
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
          <div>
            <ul>
              <li><FaStar className="fa fa-star" aria-hidden="true"/></li>
              <li><FaStar className="fa fa-star" aria-hidden="true"/></li>
              <li><FaStar className="fa fa-star" aria-hidden="true"/></li>
              <li><FaStar className="fa fa-star" aria-hidden="true"/></li>
              <li><FaStar className="fa fa-star" aria-hidden="true"/></li>
            </ul>
            <span className={'ContactFormBig__clients'}>397 постояных клиентов оценивают нашу работу на отлично</span>
          </div>


        </div>

        <div className={'PicText__wrapper'}>
          <h3 className={'PicText__title'}>Обувь, которую любят ваши покупатели</h3>
          <span className={'PicText__text'}>Скачайте каталог обувной продукции и пообщайтись с нашими консультантами, они подскажут какие модели пользуются наибольшим спросом</span>
          <StaticImage className={'PicText__img'} src={'../assets/images/catalog.png'} alt={'Каталог обувной продукции'} width={550} placeholder="tracedSvg"/>
        </div>

      </div>

    </section>
  );
};


export default FormSection;