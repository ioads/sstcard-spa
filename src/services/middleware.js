import Cookie from 'js-cookie'

export default {
    gestor(to, from, next) {
        const token = Cookie.get('_myapp_token');
        const role = Cookie.get('_myapp_role');

        if(!token) {
            next('/login')
        }

        if(role != 1) {
            Cookie.remove('_myapp_token');
            Cookie.remove('_myapp_role');
            next('/login')
        }

        next();
    },
    parceiro(to, from, next) {
        const token = Cookie.get('_myapp_token');
        const role = Cookie.get('_myapp_role');

        if(!token) {
            next('/login')
        }

        if(role != 2) {
            Cookie.remove('_myapp_token');
            Cookie.remove('_myapp_role');
            next('/404')
        }

        next();
    },
}