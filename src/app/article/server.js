import Ajax from '../util/server'

export default class Server extends Ajax{
    add (params) {
        return this.post('/admin/navigation', params)
    }
    getList (params) {
        return this.get('/admin/navigation', params)
    }
    getNavigationAll (params) {
        return this.get('/admin/navigationAll', params)
    }
    remove (id) {
        return this.delete(`/admin/navigation/${id}`)
    }
    edit (id, params) {
        return this.put(`/admin/navigation/${id}`, params)
    }
}