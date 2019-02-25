import axios from "axios";
let instance = axios.create({
    baseURL: "http://localhost:3303",
    timeout: 1000,
    headers: {
        'Content-Type': "application/json"
    }
});
/**
 * get 请求
 */
function httpGet(url,params,callback){
    return new Promise((resolve,reject)=>{
        instance.get(url,{params:params}).then(res=>{
            resolve(res);
            callback&&callback();
        }).catch(err=>{
            reject(err);
        });
    })
}
/**
 * post 请求
 */
function httpPost(url,params,callback){
    return new Promise((resolve,reject)=>{
        instance.post(url,{params:params}).then(res=>{
            resolve(res);
            callback&&callback();
        }).catch(err=>{
            reject(err);
        });
    })
}
export {httpGet,httpPost};