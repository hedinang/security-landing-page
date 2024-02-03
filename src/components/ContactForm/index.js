/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/first */
import { Row, Col, Form, Input, Button, Select, DatePicker, Modal, Spin } from "antd";
import { useState } from "react";
const { TextArea } = Input;
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { NumericFormat } from 'react-number-format';

import './style.scss'
import apiFactory from "../../api";
import { GENDER_LIST, POSITION_LIST, SUPPORT_LIST, WORKING_TIME_LIST } from "../../config/Constant";

const Recruitment = ({ title, content, id }) => {
  const navigate = useNavigate()
  // const { values, errors, handleChange, handleSubmit } = useForm(validate);
  const [form] = Form.useForm()
  const [initalData, setInitialData] = useState({
    name: '',
    yearOfBirth: '',
    gender: '',
    phone: '',
    position: '',
    location: '',
    workingTime: 'FULL',
    wage: '',
    support: 'SELF',
    message: ''
  })

  const [workingTimeList, setWorkingTimeList] = useState(WORKING_TIME_LIST)

  const [supportList, setSupportList] = useState(SUPPORT_LIST)

  const [genderList, setGenderList] = useState(GENDER_LIST)

  const [positionList, setPositionList] = useState(POSITION_LIST)

  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    const result = await apiFactory.applicantApi.create({
      name: values?.name,
      year_of_birth: values?.yearOfBirth?.$y,
      gender: values?.gender,
      phone: values?.phone,
      position: values?.position,
      location: values?.location,
      working_time: values?.workingTime,
      wage: typeof (values?.wage) === 'number' ? values?.wage : Number(values?.wage?.replaceAll(',', '')),
      support: values?.support,
      message: values?.message,
    })
    setLoading(false)

    if (result?.status === 200) {
      toast.success('Tạo yêu cầu thành công')
    } else {
      toast.error(result?.message)
    }
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
      <h6 className="text-center mb-[50px]">Tuyển dụng</h6>
      <div className="text-[#18216D] text-[21px]" >Gửi thông tin theo mẫu để ứng tuyển</div>
      <Row className="contact-form mb-[50px]">
        <Col lg={11} md={11} sm={24} xs={24} className="register-form">
          <Col span={24}>
            <Form.Item label="Họ và tên"
              name="name"
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
            <Form.Item label="Năm sinh"
              name="yearOfBirth"
              rules={[
                {
                  required: true,
                  message: 'Bắt buộc!',
                },
              ]}>
              <DatePicker picker="year" placeholder="Chọn năm sinh" />
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
              <Select
                options={genderList}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Số điện thoại (Nhập số)"
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Bắt buộc!',
                },
              ]}>
              <Input onKeyPress={(event) => {
                if (!/[0-9.]/.test(event.key)) {
                  event.preventDefault();
                }
              }} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Vị trí ứng tuyển"
              name="position"
              rules={[
                {
                  required: true,
                  message: 'Bắt buộc!',
                },
              ]}>
              <Select
                options={positionList}
              />
            </Form.Item>
          </Col>
        </Col>
        <Col lg={2} md={2} />
        <Col lg={11} md={11} sm={24} xs={24} className="register-form">
          <Col span={24}>
            <Form.Item label="Địa điểm làm việc mong muốn"
              name="location"
              rules={[
                {
                  required: true,
                  message: 'Bắt buộc!',
                },
              ]}>
              <TextArea />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Thời gian làm việc mong muốn"
              name="workingTime"
              rules={[
                {
                  required: true,
                  message: 'Bắt buộc!',
                },
              ]}>
              <Select
                options={workingTimeList}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Thu nhập mong muốn (Nhập số VNĐ)"
              name="wage"
              rules={[
                {
                  required: true,
                  message: 'Bắt buộc!',
                },
              ]}>
              <NumericFormat
                onKeyPress={(event) => {
                  if (!/[0-9.]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                // value={value?.unitPrice} disabled={difference.type === 'view' || !value?.unitPriceSetting}
                // onChange={onChangeUnitPrice} 
                customInput={Input}
                thousandsGroupStyle="thousand" thousandSeparator="," decimalScale={2}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Chỗ ăn ở mong muốn"
              name="support"
              rules={[
                {
                  required: true,
                  message: 'Bắt buộc!',
                },
              ]}>
              <Select
                options={supportList}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Tin nhắn" name="message">
              <TextArea />
            </Form.Item>
          </Col>
        </Col>
        <Button className="bg-[white] w-[100px]" htmlType="submit">Gửi</Button>
      </Row>
      <Modal title="Basic Modal" open={loading}>
        Đang gửi ...
        <Spin />
      </Modal>
    </Form>
  );
};

export default Recruitment;
