import axios from 'axios'
export default class Server {
    static async get (params) {
        return await axios.get(...params)
    }
    static async post (params) {
        debugger
        return await axios.post(...params)
    }
    static async put (params) {
        return await axios.put(...params)
    }
    static async delete (params) {
        return await axios.delete(...params)
    }
}