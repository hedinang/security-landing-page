export const keyMenuItem = {
    DASHBOARD: {
        key: 'DASHBOARD',
        name: 'Thống kê'
    },
    APPLICANT_LIST: {
        key: 'APPLICANT_LIST',
        name: 'Danh sách ứng viên'
    },
    AUTHOR_LIST: {
        key: 'AUTHOR_LIST',
        name: 'Danh sách tác giả'
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

export {
    WORKING_TIME_LIST, SUPPORT_LIST, GENDER_LIST, POSITION_LIST
}