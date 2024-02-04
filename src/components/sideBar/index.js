/* eslint-disable react/react-in-jsx-scope */
import { Layout, Menu } from 'antd';
import { useMemo } from 'react';
import { SiAdguard } from "react-icons/si";
import { HiOutlineLogout, HiUserGroup } from 'react-icons/hi';
import { PiPersonArmsSpreadDuotone } from "react-icons/pi";
import { SlPaperPlane } from "react-icons/sl";
import { PiShareNetwork } from "react-icons/pi";

import { Link, useNavigate } from 'react-router-dom';


import './style.scss';
import Cookies from 'js-cookie';
import apiFactory from '../../api';
import { useSideBarStore } from '../../store/SideBarStore';
import { keyMenuItem } from '../../config/Constant';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    }
}

const SideBar = () => {
    const navigate = useNavigate()
    const collapse = useSideBarStore(state => state.collapse)
    const switchBreadCrumbItem = useSideBarStore(state => state.switchBreadCrumbItem)

    const logout = async () => {
        await apiFactory.customerApi.logout()
        Cookies.remove('access_token')
        navigate('/login')
    }

    const items = useMemo(() => {
        if (collapse) {
            return [
                getItem(<Link to={'/applicant/list'}>{keyMenuItem.APPLICANT_LIST.name}</Link>, keyMenuItem.APPLICANT_LIST.key, <PiPersonArmsSpreadDuotone />),
                getItem(<Link to={'/requirement/list'}>{keyMenuItem.REQUIREMENT_LIST.name}</Link>, keyMenuItem.REQUIREMENT_LIST.key, <SlPaperPlane />),
                // getItem(<Link to={'/author/list'}>{keyMenuItem.AUTHOR_LIST.name}</Link>, keyMenuItem.AUTHOR_LIST.key, <UserOutlined />),
                // getItem(<Link to={'/sale/list'}>{keyMenuItem.SALE_LIST.name}</Link>, keyMenuItem.SALE_LIST.key, <BsFillCartFill />),
                // getItem(<Link to={'/category/list'}>{keyMenuItem.CATEGORY_LIST.name}</Link>, keyMenuItem.CATEGORY_LIST.key, <UnorderedListOutlined />),
                // getItem(<Link to={'/'}>{keyMenuItem.PRESENT_LIST.name}</Link>, keyMenuItem.PRESENT_LIST.key, <GiftOutlined />),

                getItem(<Link to={'/service/list'}>{keyMenuItem.SERVICE_LIST.name}</Link>, keyMenuItem.SERVICE_LIST.key, <SiAdguard />),
                // getItem(<Link to={'/'}>{keyMenuItem.CHAT.name}</Link>, keyMenuItem.CHAT.key, <SiMinutemailer />),
                getItem(<Link to={'/social'}>{keyMenuItem.SOCIAL_NETWORK.name}</Link>, keyMenuItem.SOCIAL_NETWORK.key, <PiShareNetwork />),
                getItem(<Link onClick={logout} >{keyMenuItem.LOG_OUT.name}</Link>, keyMenuItem.LOG_OUT.key, <HiOutlineLogout />)
            ]
        } else {
            return [
                getItem(<div className='text-center text-[#4b646f]'>Các chức năng quản lý</div>, keyMenuItem.FUNCTION),
                getItem(<Link to={'/applicant/list'}>{keyMenuItem.APPLICANT_LIST.name}</Link>, keyMenuItem.APPLICANT_LIST.key, <PiPersonArmsSpreadDuotone />),
                getItem(<Link to={'/requirement/list'}>{keyMenuItem.REQUIREMENT_LIST.name}</Link>, keyMenuItem.REQUIREMENT_LIST.key, <SlPaperPlane />),
                // getItem(<Link to={'/author/list'}>{keyMenuItem.AUTHOR_LIST.name}</Link>, keyMenuItem.AUTHOR_LIST.key, <UserOutlined />),
                // getItem(<Link to={'/sale/list'}>{keyMenuItem.SALE_LIST.name}</Link>, keyMenuItem.SALE_LIST.key, <BsFillCartFill />),
                // getItem(<Link to={'/category/list'}>{keyMenuItem.CATEGORY_LIST.name}</Link>, keyMenuItem.CATEGORY_LIST.key, <UnorderedListOutlined />),
                // getItem(<Link to={'/'}>{keyMenuItem.PRESENT_LIST.name}</Link>, keyMenuItem.PRESENT_LIST.key, <GiftOutlined />),

                getItem(<div className='text-center text-[#4b646f]'>Các chức năng khác</div>, keyMenuItem.FUNCTION),
                getItem(<Link to={'/service/list'}>{keyMenuItem.SERVICE_LIST.name}</Link>, keyMenuItem.SERVICE_LIST.key, <SiAdguard />),
                // getItem(<Link to={'/'}>{keyMenuItem.CHAT.name}</Link>, keyMenuItem.CHAT.key, <SiMinutemailer />),
                getItem(<Link to={'/social'}>{keyMenuItem.SOCIAL_NETWORK.name}</Link>, keyMenuItem.SOCIAL_NETWORK.key, <PiShareNetwork />),
                getItem(<Link onClick={logout} >{keyMenuItem.LOG_OUT.name}</Link>, keyMenuItem.LOG_OUT.key, <HiOutlineLogout />)
            ]
        }
    }, [collapse])

    return (
        <Layout.Sider
            className="!max-w-[230px] !w-auto h-[100vh]
              SideBarWrapper"
            collapsible
            collapsed={collapse}
            width={230}
            trigger={null}
            style={{
                background: 'white',
                fontFamily: 'Inter',
            }}
        >
            {!collapse ?
                <a className='user-panel-logo'>
                    <b className='text-[20px]'>Tiên Phong</b>
                    <span className='ml-[5px]'>Security</span>
                </a>
                : <a className='user-panel-logo'>SM</a>
            }
            <Menu
                onClick={e => switchBreadCrumbItem(keyMenuItem[e.key].name)}
                mode="inline"
                // mode="vertical"
                theme="dark"
                items={items}
                className='bg-[#222d32]'
            />
        </Layout.Sider>
    );
};

export default SideBar;
