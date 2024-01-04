/* eslint-disable react-hooks/exhaustive-deps */


import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import Header from "../header";
import { Layout, Space } from "antd";
import Footer from "../Footer/Footer";
import { Styles } from "../../styles/styles";

const PublicLayout = ({ children }) => {
    const token = Cookies.get('access_token')
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            navigate('/dashboard', { replace: true });
        }
    }, [token]);
    return <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
            <Layout.Content >
                <Styles />
                <Header />
                {children}
            </Layout.Content>
            <Footer />
        </Layout>
    </Space>;
};

export default PublicLayout;
