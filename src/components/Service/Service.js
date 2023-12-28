import { Row, Col, Form, Input, Button, Modal, Select, Spin, Radio } from "antd";
import ServiceContent from "../../content/ServiceContent.json";
import './style.scss'
import { useEffect, useState } from "react";
import { Option } from "antd/es/mentions";
import { NumericFormat } from 'react-number-format';


const { TextArea } = Input;

const services = ServiceContent.services


const AsyncSelectAuthor = ({ value, onChange }) => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    // const [currentTotal, setCurrentTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    const [serviceList, setServiceList] = useState([])
    // const fetchAuthorList = async () => {
    //     const result = await apiFactory.authorApi.getList({
    //         per: limit,
    //         page: page,
    //     })
    //     if (result?.data?.items) {
    //         setAuthorList(result?.data?.items?.map(e => ({
    //             component: <Option key={e.id} value={e.id}>
    //                 {e.name}
    //             </Option>,
    //             value: e.id,
    //             label: e.name
    //         })))
    //         setTotalItems(result?.data?.total_items)
    //     }
    // }

    // const onscroll = async (event) => {
    //     if ((event.currentTarget.scrollTop + event.currentTarget.clientHeight) >= event.currentTarget.scrollHeight &&
    //         (page * limit) < totalItems && !loading) {
    //         authorList.push(<Option key={'loading'} value={'loading'} disabled>
    //             <Spin className="absolute left-[50%]" />
    //         </Option>)
    //         setAuthorList([...authorList])
    //         setLoading(true)
    //         // setTimeout(async () => {
    //         //     const data = await apiFactory.categoryApi.getList({
    //         //         per: limit,
    //         //         page: page + 1,
    //         //     })
    //         //     if (data) {
    //         //         authorList.pop()
    //         //         const newAuthorList = authorList.concat(data?.data?.items.map((e) => ({
    //         //             component: <Option key={e.id} value={e.id}>
    //         //                 {e.name}
    //         //             </Option>,
    //         //             value: e.id,
    //         //             label: e.name
    //         //         })))
    //         //         setAuthorList(newAuthorList)
    //         //         setPage(page + 1)
    //         //         setTotalItems(data?.data?.total_items)
    //         //     }
    //         //     setLoading(false)
    //         // }, 500)

    //     }
    // }
    const chooseService = (e) => {
        const element = serviceList.find(f => f.value === e)
        if (element) {
            onChange(element)
        }
    }
    useEffect(() => {
        setServiceList(services.map(s => ({
            value: s,
            label: s
        })))
        // fetchAuthorList()
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
                    }} />
                </Col>
                <Col span={2} />
                <Col span={11}>
                    đến
                    <Input onKeyPress={(event) => {
                        if (!/[0-9.]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }} />
                </Col>
            </Row>}
    </div>
}

export default function Service() {
    const [form] = Form.useForm()
    const [genderList, setGenderList] = useState([{
        label: 'Không quan trọng',
        value: 'unimportant'
    },
    {
        label: 'Nam',
        value: 'male'
    },
    {
        label: 'Nữ',
        value: 'female'
    }])
    const [initalData, setInitialData] = useState({
        email: '',
        phone: '',
        securityType: '',
        location: '',
        description: '',
        age: {
            value: 'unimportant'
        },
        shape: '',
        gender: 'unimportant',
        specialty: ''
    })
    const [loading, setLoading] = useState(false)

    const onFinish = async (values) => {
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



    return <Form
        initialValues={initalData}
        onFinish={onFinish}
        form={form}
        // labelCol={{ style: { width: 120 } }}
        layout="vertical"
        id="recruitment"

    >
        <div id="service" className="services">
            <h6 className="text-center mb-[50px]">Dịch vụ và báo giá</h6>
            <Row className="mb-[50px]">
                <Col lg={12} md={12} sm={24} xs={24} className="content">
                    {services.slice(0, services.length / 2).map(service => <div>{service}</div>)}
                </Col>
                <Col lg={12} md={12} sm={24} xs={24} className="content">
                    {services.slice(services.length / 2, services.length - 1).map(service => <div>{service}</div>)}
                </Col>
            </Row>
            <div className="text-[#18216D] text-[21px]" >Gửi yêu cầu theo mẫu và số điện thoại hoặc email để nhận kết quả tư vấn và hỗ trợ</div>
            <Row className="contact-form mb-[50px]">
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
                            name="identification"
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
                            name="name"
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
                            name="specilty"
                        >
                            <TextArea />
                        </Form.Item>
                    </Col>
                </Col>
                <Button className="bg-[white] w-[100px]">Gửi</Button>
            </Row>
        </div>
    </Form>
}
