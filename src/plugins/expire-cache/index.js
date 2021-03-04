import expireCache from 'expire-cache';

const qs = function(data){
    return Object.keys(data).reduce((result, key, i) => {
        result += `${i != 0 ? "&" : ""}${key}=${data[key]}`;
        return result;
    }, "");
}

export const getRequestKey = function(url, params, data){
    let key = url;

    if (params) {
        url += "?";
        url += qs(params);
    }

    if (data) {
        url += "#";
        url += qs(data);
    }
}


export const reqCache = expireCache.namespace('request-cache', 18);
