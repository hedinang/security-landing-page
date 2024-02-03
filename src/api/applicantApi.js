
import { APPLICANT } from './apiConstant';
import BaseApi from './baseApi';

class ApplicantApi extends BaseApi {
    getList(param) {
        return this.post(`${APPLICANT}/list`, param);
    }

    getById(id) {
        if (id) {
            return this.get(`${APPLICANT}/${id}`);
        }
        return Promise.resolve(null);
    }

    update(param) {
        return this.put(`${APPLICANT}/update`, param, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    create(param) {
        return this.post(`${APPLICANT}/add`, param, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    delete(idList) {
        return this.post(`${APPLICANT}/delete`, idList);
    }
}
export default ApplicantApi;
