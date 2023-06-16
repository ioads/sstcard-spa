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

export function axiosExcel(endpoint, filename) {
    axios.get(process.env.VUE_APP_API_URL + endpoint,
    {responseType: 'arraybuffer'})
    .then(response => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', filename + '.xlsx');
        document.body.appendChild(fileLink);
        fileLink.click();
    })
}

export function axiosPdf(endpoint, filename) {
    axios.get(process.env.VUE_APP_API_URL + endpoint,
    {responseType: 'blob'})
    .then(response => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data], {type: 'application/pdf'}));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', filename + '.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
    })
}