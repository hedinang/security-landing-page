import { Table } from 'antd';
import apiFactory from '../../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatTime } from '../../utils/formatTime';
import { NumericFormat } from 'react-number-format';
import { GENDER_LIST, GENDER_REQUIREMENT_LIST, POSITION_LIST, SUPPORT_LIST, WORKING_TIME_LIST } from '../../config/Constant';

const columns = [
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Loại dịch vụ',
        dataIndex: 'kindOfServiceName',
        key: 'kindOfServiceName',
    },
    {
        title: 'Địa điểm',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Mục tiêu',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Độ tuổi',
        dataIndex: 'age',
        key: 'age',
        // render: (text) => POSITION_LIST.filter(e => e?.value === text)?.[0].label,
    },
    {
        title: 'Giới tính',
        dataIndex: 'gender',
        key: 'gender',
        // render: (text) => POSITION_LIST.filter(e => e?.value === text)?.[0].label,
    },
    {
        title: 'Hình thức',
        dataIndex: 'shape',
        key: 'shape',
    },
    {
        title: 'Yêu cầu khác',
        dataIndex: 'specialty',
        key: 'specialty'
    },
    {
        title: 'Ngày gửi',
        dataIndex: 'createdAt',
        key: 'createdAt',
    }
];

const RequirementList = () => {
    const [requirementList, setRequirementList] = useState([])
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

    const fetchRequirement = async () => {
        const result = await apiFactory.requirementApi.getList({
            limit: limit,
            page: page,
            search: search
        })

        setRequirementList(result?.data?.items?.map((e, i) => (
            {
                id: e?.id,
                key: e?.id,
                index: (page - 1) * limit + i + 1,
                email: e?.email,
                phone: e?.phone,
                kindOfServiceName: e?.kindOfServiceName,
                location: e?.location,
                description: e?.description,
                age: e?.age?.value === 'unimportant' ? 'Không quan trọng' : `${e?.age?.from ? e?.age?.from : 'Không giới hạn'} - ${e?.age?.to ? e?.age?.to : 'Không giới hạn'}`,
                gender: GENDER_REQUIREMENT_LIST.find(f => f?.value === e?.gender)?.label,
                shape: e?.shape,
                specialty: e?.specialty,
                status: e?.status,
                createdAt: formatTime(e?.createdAt),
            }
        )))

        setTotalItems(result?.data?.total_items)
    }

    useEffect(() => {
        fetchRequirement()
    }, [limit, page, refresh])
    return <div className='p-[20px]'>
        <Table columns={columns} dataSource={requirementList} />
    </div>
};

export { RequirementList }