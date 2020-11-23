import {get, post, uploadFile} from "@/api/config/request";

let paths = require.context('./', false, /\/.*\.js$/);
let apis = {};
paths.keys().forEach(key => {
    if (key !== './index.js') {
        apis[key.replace(/(\.\/|\.js)/g, '')] = paths(key).default;
    }
})

const allApi = {}

Object.keys(apis).forEach(key => {
    allApi[key] = allApi[key]? allApi[key] :{};
    Object.keys(apis[key]).forEach(childKey => {
        let item = apis[key][childKey],
            method = item.method;
        if (method === 'get') {
            allApi[key][childKey] = get(item.api);   
        } else if (method === 'post') {
            allApi[key][childKey] = post(item.api);
        } else if (method === 'uploadFile') {
            allApi[key][childKey] = uploadFile(item.api);
        }
    })
})
console.log('all-api', allApi)
export default allApi;
