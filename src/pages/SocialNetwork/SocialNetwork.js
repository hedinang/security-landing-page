
import { useEffect, useState } from 'react';

import './style.scss';
import { Button, Col, Form, Input, Modal, Row, Spin } from 'antd';
import StickyFooter from '../../components/stickyFooter/StickyFooter';
import { useNavigate, useParams } from 'react-router-dom';
import apiFactory from '../../api';
import { toast } from 'react-toastify';

function SocialNetwork() {
    const [different, setDifferent] = useState({ type: 'view' })
    const param = useParams()
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [initalData, setInitialData] = useState({
        facebook: '',
        zalo: '',
        youtube: '',

    })
    const onFinish = async (values) => {
        setLoading(true)

        let result
        if (initalData?.id) {
            result = await apiFactory.socialApi.update({
                id: initalData?.id,
                facebook: values?.facebook,
                zalo: values?.zalo,
                youtube: values?.youtube,
            })
        }
        setLoading(false)
        if (result?.status === 200) {
            toast.success('Cập nhật danh mục dịch vụ thành công')
            navigate('/social')
            setDifferent({ type: 'view' })
        } else {
            toast.error(result?.message)
        }
    }


    const onDelete = async () => {
        setLoading(true)
        const result = await apiFactory.socialApi.delete([param.id])
        setLoading(false)
        if (result.status === 200) {
            toast.success('Xoá thành công')
            navigate('/social/list')
        } else {
            toast.error(result?.message)
        }
    }

    const fetchData = async () => {
        const result = await apiFactory.socialApi.getList()
        setInitialData(
            {
                id: result?.data?.id,
                facebook: result?.data?.facebook,
                zalo: result?.data?.zalo,
                youtube: result?.data?.youtube,
            }
        )

        form.setFieldsValue({
            id: result?.data?.id,
            facebook: result?.data?.facebook,
            zalo: result?.data?.zalo,
            youtube: result?.data?.youtube,
        })

    }
    useEffect(() => {
        fetchData()

    }, [different])

    return <div className='social-detail'>
        <Form
            initialValues={initalData}
            onFinish={onFinish}
            form={form}
            // labelCol={{ style: { width: 120 } }}
            layout='vertical'

        >
            <Row>
                <Col span={11}>
                    <Form.Item label="Facebook"
                        name="facebook"
                    >
                        <Input disabled={different.type === 'view'} />
                    </Form.Item>
                    <Form.Item label="Zalo"
                        name="zalo"
                    >
                        <Input disabled={different.type === 'view'} />
                    </Form.Item>
                    <Form.Item label="Youtube"
                        name="youtube"
                    >
                        <Input disabled={different.type === 'view'} />
                    </Form.Item>
                </Col>

            </Row>

            <StickyFooter >
                <div className="flex justify-between gap-[5px]">
                    {different.type !== 'view' ? <Button className='bg-[#868e96] text-white ml-[230px]' onClick={() => setDifferent({ type: 'view' })}>Quay lại</Button> : <div />}
                    <div className='flex gap-[5px]'>
                        {different.type !== 'view' && <Button className='ml-auto bg-[#007dce] text-white' htmlType="submit">Lưu</Button>}
                        {different.type === 'view' && <Button className='ml-auto bg-[#aec57d] text-white' onClick={() => setDifferent({ type: 'edit' })}>Sửa</Button>}
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

export default SocialNetwork
