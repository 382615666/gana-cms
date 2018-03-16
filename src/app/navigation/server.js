import Ajax from '../util/server'

export default class Server extends Ajax{
    addSubmit () {
        return this.post('/admin/navigation', {test:11})
    }
}