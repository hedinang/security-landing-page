import AdminApi from "./adminApi";
import ApplicantApi from "./applicantApi";
import AuthApi from "./authApi";
import AuthorApi from "./authorApi";
import CategoryApi from "./categoryApi";
import CustomerApi from "./customerApi";
import DashboardApi from "./dashboardApi";
import RequirementApi from "./requirementApi";
import SaleApi from "./saleApi";
import ServiceApi from "./serviceApi";
import SocialApi from "./socialApi";
import SongApi from "./songApi";



const apiFactory = {
    authApi: new AuthApi(),
    categoryApi: new CategoryApi(),
    customerApi: new CustomerApi(),
    adminApi: new AdminApi(),
    songApi: new SongApi(),
    saleApi: new SaleApi(),
    authorApi: new AuthorApi(),
    dashboardApi: new DashboardApi(),
    applicantApi: new ApplicantApi(),
    requirementApi: new RequirementApi(),
    serviceApi: new ServiceApi(),
    socialApi: new SocialApi(),
};

export default apiFactory;
