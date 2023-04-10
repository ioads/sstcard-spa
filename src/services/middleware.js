import Cookie from 'js-cookie'

export default {
    auth(to, from, next) {
        const token = Cookie.get('_myapp_token');

        // fazer ajax pro backend para checkar se o token está valido
        // this.checkToken();

        if(!token) {
            next('/login')
        }

        next();
    },
}