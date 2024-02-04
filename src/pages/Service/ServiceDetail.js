
import React, { useCallback, useEffect, useState } from 'react';

import './style.scss';
import { Button, Col, Form, Input, Modal, Row, Spin } from 'antd';
import StickyFooter from '../../components/stickyFooter/StickyFooter';
import { DeleteFilled, FileImageOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import apiFactory from '../../api';
import { toast } from 'react-toastify';



function ServiceDetail({ different }) {
    const param = useParams()
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [initalData, setInitialData] = useState({
        serviceName: '',
        img: {
            url: '',
            file: null
        }

    })
    const onFinish = async (values) => {
        if (values?.serviceName.trim() === '') {
            return toast.error('Tên dịch vụ không được để trống!')
        }
        setLoading(true)

        let result
        if (different.type === 'edit') {
            result = await apiFactory.serviceApi.update({
                id: param.id,
                name: values?.serviceName.trim(),
                // file: values?.img?.file,
                // origin_url: values?.img?.url
            })

        }
        if (different.type === 'add') {
            result = await apiFactory.serviceApi.create({
                name: values?.serviceName.trim(),
                // file: values?.img?.file
            })
        }
        setLoading(false)
        if (result?.status === 200) {
            if (different.type === 'add') {
                toast.success('Tạo danh mục dịch vụ thành công')
            }

            if (different.type === 'edit') {
                toast.success('Cập nhật danh mục dịch vụ thành công')
            }

            navigate('/service/list')
        } else {
            toast.error(result?.message)
        }
    }

    const CoverImage = useCallback(({ value, onChange }) => {
        const uploadImg = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();

            if (file) {
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    onChange({
                        file: file,
                        url: reader.result
                    })
                }
            } else {
                onChange({
                    file: null,
                    url: ''
                })
            }
        }

        const removeImg = (e) => {
            e.preventDefault()
            onChange({
                file: null,
                url: ''
            })
        }

        return <label
            htmlFor="upload"
            className="w-[250px] h-[133px] bg-white border-[#5A96D7] boder-[1px] rounded-xl border-solid flex items-center justify-center pl-3 pr-3 cursor-pointer"
            style={{ border: '1px solid #5A96D7' }}>
            <input type="file" id="upload" className="hidden" style={{ display: 'none' }} accept="image/*"
                disabled={different.type === 'view'}
                onChange={uploadImg} />
            <div className="flex flex-col items-center justify-center">
                {(value?.url && value.url !== '') ? (
                    <div className='flex flex-col justify-center items-center gap-[5px]'>
                        <img src={value?.url} alt="preview" className="w-full h-[100px] object-cover" />
                        {different.type !== 'view' && value.url && <DeleteFilled className='text-[red]' onClick={removeImg} />}
                    </div>
                ) : (
                    <>
                        <FileImageOutlined size={40} color="#A5AAB4" />
                        <p className="text-[#A5AAB4] text-[12px] text-center">
                            upload
                        </p>
                    </>
                )}
            </div>
        </label>
    }, [different])

    const onDelete = async () => {
        setLoading(true)
        const result = await apiFactory.serviceApi.delete([param.id])
        setLoading(false)
        if (result.status === 200) {
            toast.success('Xoá thành công')
            navigate('/service/list')
        } else {
            toast.error(result?.message)
        }
    }

    const fetchData = async () => {
        if (param.id) {
            const result = await apiFactory.serviceApi.getById(param.id)
            setInitialData(
                {
                    serviceName: result?.data?.name,
                    img: {
                        url: result?.data?.img_url,
                        file: null
                    }
                }
            )

            form.setFieldsValue({
                serviceName: result?.data?.name,
                img: {
                    url: result?.data?.img_url,
                    file: null
                }
            })
        } else {
            form.setFieldsValue({
                serviceName: '',
                img: {
                    url: '',
                    file: null
                }
            })
        }
    }
    useEffect(() => {
        fetchData()

    }, [different])

    return <div className='service-detail'>
        <Form
            initialValues={initalData}
            onFinish={onFinish}
            form={form}
            // labelCol={{ style: { width: 120 } }}
            layout='vertical'

        >
            <Row>
                <Col span={11}>
                    <Form.Item label="Tên dịch vụ"
                        name="serviceName"
                        rules={[
                            {
                                required: true,
                                message: 'Bắt buộc!',
                            },
                        ]}>
                        <Input disabled={different.type === 'view'} />
                    </Form.Item>
                    {/* <Form.Item
                        label="Ảnh cover"
                        name="img"
                        className="mb-[8px]"
                        required={false}
                    >
                        <CoverImage />


                    </Form.Item> */}
                </Col>

            </Row>


            <StickyFooter >
                <div className="flex justify-between gap-[5px]">
                    <Button className='bg-[#868e96] text-white ml-[230px]' onClick={() => navigate('/service/list')}>Quay lại</Button>
                    <div className='flex gap-[5px]'>
                        {different.type !== 'view' && <Button className='ml-auto bg-[#007dce] text-white' htmlType="submit">Lưu</Button>}
                        {different.type === 'view' && <Button className='ml-auto bg-[#aec57d] text-white' onClick={() => navigate(`/service/edit/${param.id}`)}>Sửa</Button>}
                        {different.type === 'view' && <Button className='bg-[#ed2727] text-white' onClick={onDelete}>Xoá</Button>}
                    </div>
                </div>
            </StickyFooter>
        </Form>
        <Modal title="Hệ thống đang xử lý" open={loading} closable={false} footer={null}>
            <Spin className="mt-[20px] flex justify-center gap-[10px]" />
        </Modal>
    </div>


}

export default ServiceDetail
