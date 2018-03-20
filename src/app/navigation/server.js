import Ajax from '../util/server'

export default class Server extends Ajax{
    add (params) {
        return this.post('/admin/navigation', params)
    }
    getList (params) {
        return this.get('/admin/navigation', params)
    }
    remove (id) {
        return this.delete(`/admin/navigation/${id}`)
    }
}