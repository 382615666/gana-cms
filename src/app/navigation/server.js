import server from '../util/server'

export default class Server{
    static addSubmit () {
        return server.post('/admin/navigation', {test:11})
    }
}