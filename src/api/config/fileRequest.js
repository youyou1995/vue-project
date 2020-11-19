import axios from 'axios';

class FileRequest {
    constructor(baseUrl, headers = {
        'Content-Type': 'multipart/form-data',
    }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }
    request() {
        let instance = axios.create();
        Object.assign(instance, )
    }
}
