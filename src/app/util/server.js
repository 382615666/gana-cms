import axios from 'axios'
export default class Ajax {
    get (url, params) {
        return axios.get(url, {params})
    }
    post (url, params) {
        return axios.post(url, params)
    }
    put (url, params) {
        return axios.put(url, params)
    }
    delete (url, params) {
        return axios.delete(url, params)
    }
}