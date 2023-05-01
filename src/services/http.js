import axios from 'axios';

export function get(endpoint) {
    return axios
        .get(process.env.VUE_APP_API_URL+`/${endpoint}`)
        .then(response => response.data.data)
}