import { LoadingOutlined } from "@ant-design/icons"
import { Button, Form, Input, Spin } from "antd"
import { useState } from "react"
import './style.scss'

export default function Login() {
    const [form] = Form.useForm()
    const [data, setData] = useState({
        name: '',
        age: '',
        gender: '',
        phone: '',
        position: '',
        location: '',
        workingTime: 'full',
        wage: '',
        support: 'self'
    })
    const [loading, setLoading] = useState(false)
    const onFinish = async () => {
        // setLoading(true)
    }
    return <Form
        initialValues={data} onFinish={onFinish} autoComplete="off"
        layout="vertical"
    >
        <div className="login">
            <div className="content">
                <Form.Item name="username" label="Tài khoản"
                    rules={[
                        {
                            required: true,
                            message: 'Bắt buộc!',
                        },
                    ]}
                >
                    <Input disabled={loading} />
                </Form.Item>
                <Form.Item name="password" label="Mật khẩu"
                    rules={[
                        {
                            required: true,
                            message: 'Bắt buộc!',
                        },
                    ]}
                >
                    <Input type="password" disabled={loading} />
                </Form.Item>
                <Form.Item>
                    <Button className="button w-[100px]" htmlType="submit">
                        {loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> : 'Đăng nhập'}
                    </Button>
                </Form.Item>
            </div>
        </div>
    </Form>
}