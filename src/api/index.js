// import {get, post, uploadFile} from "@/api/config/request";

let paths = require.context('./', false, /\/.*\.js$/);
let apis = [];
paths.keys().map(key => {
    console.log('key', key)
    if (key !== 'index.js') {
        apis.push(paths(key).default);
    }
})

const allApi = {}
export default allApi;
