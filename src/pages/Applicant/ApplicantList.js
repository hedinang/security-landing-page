import { Table } from 'antd';
import apiFactory from '../../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatTime } from '../../utils/formatTime';
import { NumericFormat } from 'react-number-format';
import { GENDER_LIST, POSITION_LIST, SUPPORT_LIST, WORKING_TIME_LIST } from '../../config/Constant';

const columns = [
    {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Giới tính',
        dataIndex: 'gender',
        key: 'gender',
        render: (text) => GENDER_LIST.filter(e => e?.value === text)?.[0].label,
    },
    {
        title: 'Năm sinh',
        dataIndex: 'yearOfBirth',
        key: 'yearOfBirth',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Vị trí công việc',
        dataIndex: 'position',
        key: 'position',
        render: (text) => POSITION_LIST.filter(e => e?.value === text)?.[0].label,
    },
    {
        title: 'Địa điểm làm việc',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Thời gian làm việc',
        dataIndex: 'workingTime',
        key: 'workingTime',
        render: (text) => WORKING_TIME_LIST.filter(e => e?.value === text)?.[0].label,
    },
    {
        title: 'Mức thu nhập',
        dataIndex: 'wage',
        key: 'wage',
        render: (text) => < NumericFormat
            disabled
            thousandsGroupStyle="thousand" thousandSeparator="," decimalScale={2}
            value={text}
        />,
    },
    {
        title: 'Điều kiện ăn ở',
        dataIndex: 'support',
        key: 'support',
        render: (text) => SUPPORT_LIST.filter(e => e?.value === text)?.[0].label,
    },
    {
        title: 'Ngày gửi',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'Tin nhắn',
        dataIndex: 'message',
        key: 'message',
    },
];

const ApplicantList = () => {
    const [applicantList, setApplicantList] = useState([])
    const navigate = useNavigate()
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [totalItems, setTotalItems] = useState(0)
    const [copyId, setCopyId] = useState(-1);

    const [disableCopy, setDisableCopy] = useState(true);
    const [selectedRow, setSelectedRow] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [disableDelete, setDisableDelete] = useState(true)
    const [loading, setLoading] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [search, setSearch] = useState({
        name: null
    })

    const fetchApplicant = async () => {
        const result = await apiFactory.applicantApi.getList({
            limit: limit,
            page: page,
            search: search
        })

        setApplicantList(result?.data?.items?.map((e, i) => (
            {
                id: e?.id,
                key: e?.id,
                index: (page - 1) * limit + i + 1,
                name: e?.name,
                yearOfBirth: e?.yearOfBirth,
                gender: e?.gender,
                phone: e?.phone,
                position: e?.position,
                location: e?.location,
                workingTime: e?.workingTime,
                wage: e?.wage,
                support: e?.support,
                message: e?.message,
                status: e?.status,
                createdAt: formatTime(e?.createdAt),
            }
        )))

        setTotalItems(result?.data?.total_items)
    }

    useEffect(() => {
        fetchApplicant()
    }, [limit, page, refresh])
    return <div className='p-[20px]'>
        <Table columns={columns} dataSource={applicantList} />
    </div>
};

export { ApplicantList }