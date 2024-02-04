import { LoadingOutlined } from "@ant-design/icons"
import { Button, Form, Input, Spin } from "antd"
import { useState } from "react"
import './style.scss'
import apiFactory from "../../api"
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const EXPIRY_TIME = process.env.REACT_APP_EXPIRY_TIME || "4";
export default function Login() {
    const navigate = useNavigate()
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
    const onFinish = async (values) => {
        setLoading(true)
        const result = await apiFactory.authApi.login(
            {
                username: values.username,
                password: values.password,
            }
        )

        setLoading(false)

        if (result.status === 200) {
            const me = await apiFactory.authApi.getMe(result?.data?.access_token);

            if (!me?.data) {
                toast.error(result?.message)
            }

            // if (me?.data?.role !== 'ADMIN') {
            //     toast.error("Tài khoàn này không phải là admin!")
            //     return
            // }

            localStorage.setItem('username', me?.data?.username || 'Vô danh')

            let expires = new Date(
                new Date().setHours(new Date().getHours() + parseInt(EXPIRY_TIME))
            );
            Cookies.set("access_token", result?.data.access_token, { path: "/", expires });
            toast.success('Welcome to Shop Music')
            navigate('/applicant/list')
        } else {
            toast.error(result?.message)
        }
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
                    <Button className="button w-[100px] bg-[blue] text-[white]" htmlType="submit">
                        {loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> : 'Đăng nhập'}
                    </Button>
                </Form.Item>
            </div>
        </div>
    </Form>
}