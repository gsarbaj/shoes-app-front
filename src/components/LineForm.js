import React, { useState } from "react"
import {Link} from "gatsby"
import { Button, Form, Input, Modal, Select } from "antd"
import { useForm } from "@formspree/react"
const { Option } = Select

const LineForm = props => {

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




  return(
    <div className="LineForm">
      <h5>Не знаете с чего начать? <span>Скачайте каталог продукции...</span></h5>
      <Button type="primary" onClick={showModal}>Скачать Каталог</Button>

      <Modal title="Скачать Каталог Продукции" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} cancelText={'Отмена'} footer={null}>
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

    </div>
  )
}

export default LineForm