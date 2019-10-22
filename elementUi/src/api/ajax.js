import axios from 'axios';
let install = (vue) => {
    vue.prototype.ajax = {
        forPost: (url, data) => {
            return new Promise((resolve, reject) => {
                axios.post('https://www.ybcc.live:3355' + url, data).then(
                    res => resolve(res.data),
                    err => reject(err)
                )
            })
        }
    }
};
export default install;