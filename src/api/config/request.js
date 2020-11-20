import HttpRequest from "@/api/config/axios";
import FileRequest from "@/api/config/fileRequest";

const httpRequest = new HttpRequest();
const fileRequest = new FileRequest();

export const post = (url, params, options) => {
    return httpRequest.request({
        url,
        method: 'post',
        data: params,
        options
    })
}

export const get = (url, params, options) => {
    return httpRequest.request({
        url,
        method: 'get',
        data: params,
        options
    })
}

export const uploadFile = (url, params, options) => {
    return fileRequest.request({
        url,
        method: 'post',
        data: params,
        options
    })
}


