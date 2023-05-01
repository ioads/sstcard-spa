import axios from 'axios';

export function axiosGet(endpoint) {
    return axios
        .get(process.env.VUE_APP_API_URL+`/${endpoint}`)
        .then(response => {
            if(Array.isArray(response.data.data)) {
                return response.data.data
            }
            return response.data
        })
}

export function axiosPost(endpoint, payload) {
    return axios
        .post(process.env.VUE_APP_API_URL+`/${endpoint}`, payload)
        .then(response => {
            if(Array.isArray(response.data.data)) {
                return response.data.data
            }
            return response.data
        })
}

export function axiosPut(endpoint, id, payload = null) {
    return axios
        .put(process.env.VUE_APP_API_URL+`/${endpoint}`+`/${id}`, payload)
        .then(response => {
            if(Array.isArray(response.data.data)) {
                return response.data.data
            }
            return response.data
        })
}