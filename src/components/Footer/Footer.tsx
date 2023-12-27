import { SvgIcon } from "../../common/SvgIcon"
import './style.scss'
const Footer = () => {
    return <div className="footer">
        <div className="text-start">
            <div>Mã số thuế: <span className="text-[#0c5db3]">0110066356</span></div>
            <div>Giấy chứng nhận đủ điều kiện về an ninh trật tự: <span className="text-[#0c5db3]">112-2022/GCN-PC06</span></div>
            <div>Copyright © <span className="text-[#0c5db3]">2024</span> TP Security. All Rights Reserved.</div>
        </div>
        <div className="social-media">
            <a
                href="https://www.facebook.com/AFCVN"
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
                href="https://zalo.me/g/qweclc619"
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
                href="https://www.youtube.com/watch?v=xBlEQl0g_F8&ab_channel=SAPATV"
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
