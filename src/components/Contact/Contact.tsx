import { Card } from "antd"
import { GlobalOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './style.scss'

const Contact = () => {
    return <div className="contact" id="contact">
        <h6>Liên hệ</h6>
        <Card hoverable>
            <div className="contact-card">
                <GlobalOutlined className="text-[30px] text-[#42baff]" />
                <div>Trụ sở: Tầng 5 tòa nhà N2 đường Bưởi - Vĩnh Phúc - Ba Đình - Hà Nội</div>
            </div>
        </Card>
        <Card hoverable>
            <div className="contact-card">
                <MailOutlined className="text-[30px] text-[#42baff]" />
                <div>Email: info@tpss.vn</div>
            </div>
        </Card>
        <Card hoverable>
            <div className="contact-card">
                <PhoneOutlined className="text-[30px] text-[#42baff]" />
                <div>Số điện thoại: 0392200524</div>
            </div>
        </Card>
        <div className="mt-[30px]"/>
    </div>
}
export default Contact
