import { Row, Col, Form, Input, Button, Select, Radio } from "antd";
import './style.scss'
import { useEffect, useState } from "react";
import apiFactory from "../../api";
import { toast } from 'react-toastify';
import { GENDER_REQUIREMENT_LIST } from "../../config/Constant";

const { TextArea } = Input;

const AsyncSelectAuthor = ({ value, onChange }) => {
    const [limit, setLimit] = useState(1000);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    // const [currentTotal, setCurrentTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    const [serviceList, setServiceList] = useState([])
    const fetchServiceList = async () => {
        const result = await apiFactory.serviceApi.getList({
            limit: limit,
            page: page,
            // search: search
        })

        setServiceList(result?.data?.items?.map(s => (
            {
                value: s?.id,
                label: s?.name
            }
        )))

        setTotalItems(result?.data?.total_items)
    }

    const chooseService = (e) => {
        const element = serviceList.find(f => f.value === e)
        if (element) {
            onChange(element)
        }
    }
    useEffect(() => {
        fetchServiceList()
    }, [])
    return <>
        <Select
            // onChange={(e) => chooseCategory(e)}
            onPopupScroll={onscroll}
            // onChange={(e) => {
            //     const category = categoryList.find((f) => f.value === e)
            //     value.push(category)
            //     const cloneCategoryList = categoryList.map((f) => {
            //         if (f.value === e) f.disabled = true
            //         return f;
            //     })

            //     setCategoryList(cloneCategoryList)
            //     onChange([...value]);
            // }}
            onChange={chooseService}
            // disabled={different.type === 'view'}
            options={serviceList}
            value={value}
        />
    </>

}

const SelectAge = ({ value, onChange }) => {
    const switchAge = (e) => {
        onChange({
            value: e.target.value
        })
    }

    const onChangeFromAge = (e) => {
        onChange({
            ...value,
            from: e.target.value
        })
    }

    const onChangeToAge = (e) => {
        onChange({
            ...value,
            to: e.target.value
        })
    }

    return <div>
        <Radio.Group
            onChange={switchAge}
            value={value.value}
        >
            <Radio value={'unimportant'}>Không quan trọng</Radio>
            <Radio value={'important'}>Quan trọng</Radio>
        </Radio.Group>
        {value.value === 'important' &&
            <Row className="text-[white]">
                <Col span={11}>
                    Từ
                    <Input onKeyPress={(event) => {
                        if (!/[0-9.]/.test(event.key)) {
                            event.preventDefault();
                        }

                    }}
                        value={value.from}
                        onChange={onChangeFromAge} />
                </Col>
                <Col span={2} />
                <Col span={11}>
                    đến
                    <Input onKeyPress={(event) => {
                        if (!/[0-9.]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                        value={value.to}
                        onChange={onChangeToAge} />
                </Col>
            </Row>}
    </div>
}

export default function Requirement() {
    const [form] = Form.useForm()
    const [initalData, setInitialData] = useState({
        email: '',
        phone: '',
        kindOfService: '',
        location: '',
        description: '',
        age: {
            value: 'unimportant',
            from: 26,
            to: 30
        },
        shape: '',
        gender: "MALE",
        specialty: ''
    })

    const [serviceList, setServiceList] = useState([])
    const [loading, setLoading] = useState(false)
    const [genderList, setGenderList] = useState(GENDER_REQUIREMENT_LIST)
    const onFinish = async (values) => {
        let result
        setLoading(true)
        result = await apiFactory.requirementApi.create({
            email: values?.email,
            phone: values?.phone,
            kind_of_service: values?.kindOfService?.value,
            location: values?.location,
            description: values?.description,
            age: values?.age,
            shape: values?.shape,
            gender: values?.gender,
            specialty: values?.specialty,
        })
        setLoading(false)

        if (result?.status === 200) {
            toast.success('Tạo yêu cầu thành công')
        } else {
            toast.error(result?.message)
        }
    }

    const [limit, setLimit] = useState(1000);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const fetchServiceList = async () => {
        const result = await apiFactory.serviceApi.getList({
            limit: limit,
            page: page,
            // search: search
        })
        setServiceList(result?.data?.items?.map(s => (
            {
                value: s.id,
                label: s.name
            }
        )))

        setTotalItems(result?.data?.total_items)
    }
    useEffect(() => {
        fetchServiceList()
    }, [])

    return <Form
        initialValues={initalData}
        onFinish={onFinish}
        form={form}
        // labelCol={{ style: { width: 120 } }}
        layout="vertical"
    >
        <div id="requirement" className="requirements">
            <h6 className="text-center mb-[50px]">Dịch vụ và báo giá</h6>
            <Row className="mb-[50px]">
                <Col lg={12} md={12} sm={24} xs={24} className="content">
                    {serviceList?.slice(0, serviceList?.length / 2 + 1).map(service => <div>{service?.label}</div>)}
                </Col>
                <Col lg={12} md={12} sm={24} xs={24} className="content">
                    {serviceList?.slice(serviceList?.length / 2 + 1, serviceList?.length).map(service => <div>{service?.label}</div>)}
                </Col>
            </Row>
            <div className="text-[#18216D] text-[21px]" >Gửi yêu cầu theo mẫu và số điện thoại hoặc email để nhận kết quả tư vấn và hỗ trợ</div>
            <Row className="form mb-[50px]">
                <Col lg={11} md={11} sm={24} xs={24} className="register-form">
                    <Col span={24}>
                        <Form.Item label="Email khách hàng"
                            name="email"
                            rules={[{
                                type: 'email',
                                message: 'Nhập đúng địa chỉ email',
                            },]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Số điện thoại khách hàng"
                            name="phone"
                        >
                            <Input onKeyPress={(event) => {
                                if (!/[0-9.]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Loại dịch vụ bảo vệ"
                            name="kindOfService"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bắt buộc!',
                                },
                            ]}>
                            <AsyncSelectAuthor />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Địa điểm muốn bảo vệ"
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
                        <Form.Item label="Mô tả mục tiêu bảo vệ"
                            name="description"
                        >
                            <TextArea />
                        </Form.Item>
                    </Col>

                </Col>
                <Col lg={2} md={2} />
                <Col lg={11} md={11} sm={24} xs={24} className="register-form">
                    <Col span={24}>
                        <Form.Item label="Yêu cầu độ tuổi NVBV"
                            name="age"
                        >
                            <SelectAge />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Yêu cầu hình thức NVBV"
                            name="shape"
                        >
                            <TextArea />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Yêu cầu giới tính NVBV"
                            name="gender"
                        >
                            <Select
                                options={genderList}
                            // value={value}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Yêu cầu đặc biệt khác"
                            name="specialty"
                        >
                            <TextArea />
                        </Form.Item>
                    </Col>
                </Col>
                <Button className="bg-[white] w-[100px]" htmlType="submit">Gửi</Button>
            </Row>
        </div>
    </Form>
}
