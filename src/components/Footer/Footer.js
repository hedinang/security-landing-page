import { useEffect, useState } from "react"
import { SvgIcon } from "../../common/SvgIcon"
import './style.scss'
import apiFactory from "../../api"
const Footer = () => {
    const [social, setSocial] = useState({})

    const fetchData = async () => {
        const result = await apiFactory.socialApi.getList()
        setSocial({
            facebook: result?.data?.facebook,
            zalo: result?.data?.zalo,
            youtube: result?.data?.youtube,
        })
    }
    useEffect(() => {
        fetchData()

    }, [])


    return <div className="footer">
        <div className="text-start">
            <div>Mã số thuế: <span className="text-[#0c5db3]">0110066356</span></div>
            <div>Giấy chứng nhận đủ điều kiện về an ninh trật tự: <span className="text-[#0c5db3]">112-2022/GCN-PC06</span></div>
            <div>Copyright © <span className="text-[#0c5db3]">2024</span> TP Security. All Rights Reserved.</div>
        </div>
        <div className="social-media">
            <a
                href={social?.facebook}
                target="_blank"
                rel="noopener noreferrer"
            >
                <SvgIcon
                    src={'fb.png'}
                    width="30px"
                    height="30px"
                />
            </a>
            <a
                href={social?.zalo}
                target="_blank"
                rel="noopener noreferrer"
            >
                <SvgIcon
                    src={'zalo.png'}
                    width="30px"
                    height="30px"
                />
            </a>
            <a
                href={social?.youtube}
                target="_blank"
                rel="noopener noreferrer"
            >
                <SvgIcon
                    src={'yt2.png'}
                    width="30px"
                    height="30px"
                />
            </a>
        </div>
    </div>
}
export default Footer
