
import { SOCIAL } from './apiConstant';
import BaseApi from './baseApi';

class SocialApi extends BaseApi {
    getList() {
        return this.get(`${SOCIAL}/list`);
    }
    update(param) {
        return this.put(`${SOCIAL}/update`, param);
    }
}
export default SocialApi;
