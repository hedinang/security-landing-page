/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/first */
import { Row, Col, Form, Input, Button } from "antd";

import { Slide } from "react-awesome-reveal";
import Block from "../Block";
import { useState } from "react";
const { TextArea } = Input;
import './style.scss'

const Recruitment = ({ title, content, id }: any) => {
  // const { values, errors, handleChange, handleSubmit } = useForm(validate);
  const [form] = Form.useForm()
  const [initalData, setInitialData] = useState({
    identification: '',
    name: '',
    age: '',
    gender: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: any) => {
    let result
    setLoading(true)
    // if (different.type === 'edit') {
    //     result = await apiFactory.songApi.update({
    //         id: param?.id,
    //         name: values?.name,
    //         author: values?.author?.value,
    //         category: values?.category?.map(e => e.value),
    //         image: values?.img?.file,
    //         image_url: values?.img?.url,
    //         short_audio: values?.short_song?.file,
    //         short_audio_url: values?.short_song?.url,
    //         full_audio: values?.full_song?.file,
    //         full_audio_url: values?.full_song?.url,
    //         duration: initalData.duration,
    //         unit_price: typeof (values?.unitPrice) === 'number' ? values?.unitPrice : Number(values?.unitPrice?.replaceAll(',', ''))
    //     })
    // }

    // if (different.type === 'add') {
    //     result = await apiFactory.songApi.create({
    //         name: values?.name,
    //         author: values?.author?.value,
    //         category: values?.category.map(e => e.value),
    //         image: values?.img.file,
    //         short_audio: values?.short_song.file,
    //         full_audio: values?.full_song.file,
    //         duration: initalData.duration,
    //         unit_price: typeof (values?.unitPrice) === 'number' ? values?.unitPrice : Number(values?.unitPrice?.replaceAll(',', ''))
    //     })
    // }
    // setLoading(false)

    // if (result?.status === 200) {
    //     if (different.type === 'add') {
    //         toast.success('Tạo danh mục nhạc thành công')
    //     }

    //     if (different.type === 'edit') {
    //         toast.success('Cập nhật danh mục nhạc thành công')
    //     }

    //     navigate('/song/list')
    // } else {
    //     toast.error(result?.message)
    // }
  }

  return (
    <Form
      initialValues={initalData}
      onFinish={onFinish}
      form={form}
      // labelCol={{ style: { width: 120 } }}
      layout="vertical"
      id="recruitment"

    >
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24} className="register-form">
          <Col span={24}>
            <Form.Item label="Số chứng minh thư"
              name="identification"
              rules={[
                {
                  required: true,
                  message: 'Bắt buộc!',
                },
              ]}>
              <Input className="w-[100%]" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Tên"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Bắt buộc!',
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Tuổi"
              name="age"
              rules={[
                {
                  required: true,
                  message: 'Bắt buộc!',
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Giới tính"
              name="gender"
              rules={[
                {
                  required: true,
                  message: 'Bắt buộc!',
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Số điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Bắt buộc!',
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Tin nhắn" name="message">
              <TextArea />
            </Form.Item>
          </Col>
          <Button className="bg-[white] w-[100px]">Gửi</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Recruitment;
