export const keyMenuItem = {
    DASHBOARD: {
        key: 'DASHBOARD',
        name: 'Thống kê'
    },
    SERVICE_LIST: {
        key: 'SERVICE_LIST',
        name: 'Danh sách dịch vụ'
    },
    APPLICANT_LIST: {
        key: 'APPLICANT_LIST',
        name: 'Danh sách ứng viên'
    },
    REQUIREMENT_LIST: {
        key: 'REQUIREMENT_LIST',
        name: 'Danh sách yêu cầu'
    },
    SALE_LIST: {
        key: 'SALE_LIST',
        name: 'Danh sách đã bán'
    },
    CATEGORY_LIST: {
        key: 'CATEGORY_LIST',
        name: 'Danh mục thể loại'
    },
    PRESENT_LIST: {
        key: 'PRESENT_LIST',
        name: 'Danh sách quà tặng'
    },
    CUSTOMER_LIST: {
        key: 'CUSTOMER_LIST',
        name: 'Danh sách khách hàng'
    },
    CHAT: {
        key: 'CHAT',
        name: 'Inbox'
    },
    ADMIN_LIST: {
        key: 'ADMIN_LIST',
        name: 'Danh sách admin'
    },
    SOCIAL_NETWORK: {
        key: 'SOCIAL_NETWORK',
        name: 'Mạng xã hội'
    },
    LOG_OUT: {
        key: 'LOG_OUT',
        name: 'Thoát'
    },
    FUNCTION: {
        key: 'FUNCTION',
        name: 'Tính năng'
    },
}


const WORKING_TIME_LIST = [{
    label: '24/24',
    value: 'FULL',
},
{
    label: '24/24 cách nhật',
    value: 'FULL_OTHER'
},
{
    label: '12/24 ngày',
    value: 'HALF_DAY'
},
{
    label: '12/24 đêm',
    value: 'HALF_NIGHT'
},
{
    label: 'Hành chính',
    value: 'WORKING'
}, {
    label: 'Ca làm việc khác',
    value: 'OTHER'
}]

const SUPPORT_LIST = [{
    label: 'Tự túc',
    value: 'SELF'

},
{
    label: 'Nhà đội của Công ty',
    value: 'COMPANY'
},
{
    label: 'Tại vị trí làm việc',
    value: 'WORKING_PLACE'
},
{
    label: 'Khác',
    value: 'OTHER'
}]

const GENDER_LIST = [{
    label: 'Nam',
    value: 'MALE'

},
{
    label: 'Nữ',
    value: 'FEMALE'
}]

const GENDER_REQUIREMENT_LIST = [
    {
        label: 'Không quan trọng',
        value: 'UNIMPORTANT'

    }, {
        label: 'Nam',
        value: 'MALE'

    },
    {
        label: 'Nữ',
        value: 'FEMALE'
    }]

const POSITION_LIST = [{
    label: 'Bảo vệ',
    value: 'GUARD'

},
{
    label: 'Đội trưởng',
    value: 'CAPTAIN'
},
{
    label: 'Chỉ huy',
    value: 'COMMANDER'
},
{
    label: 'Kế toán',
    value: 'ACCOUNTANT'
}]


// const SERVICE_LIST = [
//     "Bảo vệ cửa hàng",
//     "Bảo vệ chung cư",
//     "Bảo vệ tòa nhà",
//     "Bảo vệ ngân hàng",
//     "Bảo vệ nhà máy",
//     "Bảo vệ khu công nghiệp",
//     "Bảo vệ bệnh viện",
//     "Bảo vệ trường học",
//     "Bảo vệ giữ xe",
//     "Bảo vệ mục tiêu cố định khác",
//     "Bảo vệ sự kiện",
//     "Bảo vệ yếu nhân",
//     "Tư vấn an ninh"
// ]

export {
    WORKING_TIME_LIST, SUPPORT_LIST, GENDER_LIST, POSITION_LIST, GENDER_REQUIREMENT_LIST
}