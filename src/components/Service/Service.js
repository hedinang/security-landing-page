import { Row, Col } from "antd";
import ServiceContent from "../../content/ServiceContent.json";
import './style.scss'
export default function Service() {
    const services = ServiceContent.services

    return <div id="service" className="services">
        <h6 className="text-center mb-[50px]">Dịch vụ và báo giá</h6>
        <Row className="mb-[50px]">
            <Col span={12} className="content">
                {services.slice(0, services.length / 2).map(service => <div>{service}</div>)}
            </Col>
            <Col span={12} className="content">
                {services.slice(services.length / 2, services.length - 1).map(service => <div>{service}</div>)}
            </Col>
        </Row>
    </div>
}