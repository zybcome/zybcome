import axios from 'axios';

let install = (vue) => {
    vue.prototype.ajax = {
        readToken: (url,data,headers) => {
            return new Promise((resolve, reject) => {
                axios.post(
                    'https://www.ybcc.live:3355' + url, data, {
                    headers: {
                        authorization: headers
                    }
                }).then(
                    res => resolve(res.data)
                ).catch(
                    err => reject(err.data)
                )
            })
        }
    }
};
export default install;