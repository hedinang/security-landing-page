
import { REQUIREMENT } from './apiConstant';
import BaseApi from './baseApi';

class RequirementApi extends BaseApi {
    getList(param) {
        return this.post(`${REQUIREMENT}/list`, param);
    }

    getById(id) {
        if (id) {
            return this.get(`${REQUIREMENT}/${id}`);
        }
        return Promise.resolve(null);
    }

    update(param) {
        return this.put(`${REQUIREMENT}/update`, param, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    create(param) {
        return this.post(`${REQUIREMENT}/add`, param);
    }

    delete(idList) {
        return this.post(`${REQUIREMENT}/delete`, idList);
    }
}
export default RequirementApi;
