 import axios from 'axios'
class HttpRequest {
    constructor(baseUrl, headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
        this.options = {message: true}
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: this.headers,
            
        }
    }
    interceptors(instance, options) {
        instance.interceptors.request.use(config => {
            return config;
        }, error => {
            return Promise.reject(error);
        })
        instance.interceptors.response.use(res => {
            return res;
        }, error => {
            return Promise.reject(error);
        })
    }
    request(options) {
        this.options = Object.assign({message: true}, options);
        let instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        return instance(options)
    }
    
}

export default  HttpRequest;
