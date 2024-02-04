
import { SERVICE } from './apiConstant';
import BaseApi from './baseApi';

class ServiceApi extends BaseApi {
    getList(param) {
        return this.post(`${SERVICE}/list`, param);
    }

    getById(id) {
        if (id) {
            return this.get(`${SERVICE}/${id}`);
        }
        return Promise.resolve(null);
    }

    update(param) {
        return this.put(`${SERVICE}/update`, param);
    }

    create(param) {
        return this.post(`${SERVICE}/add`, param);
    }

    delete(idList) {
        return this.post(`${SERVICE}/delete`, idList);
    }
}
export default ServiceApi;
