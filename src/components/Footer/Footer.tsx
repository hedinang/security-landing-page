import { SvgIcon } from "../../common/SvgIcon"
import './style.scss'
const Footer = () => {
    return <div className="footer">
        <div>Copyright © 2023 TP Security. All Rights Reserved.</div>
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
