import axios from 'axios'
export default class Ajax {
    async get (params) {
        return await axios.get(...params)
    }
    async post (url, params) {
        return await axios.post(url, params)
    }
    async put (params) {
        return await axios.put(...params)
    }
    async delete (params) {
        return await axios.delete(...params)
    }
}