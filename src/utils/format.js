export function formatPrice(value) {
    let reais = value/100;
    let val = (reais/1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export function formatDate(value) {
    let date = new Date(value);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return day+'/'+month+'/'+year;
}

export function formatCpf(value) {
    let cpf = value.toString();
    return cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,11)
}

export function formatPhone(value) {
    let phone = value.toString();
    if(phone.length == 11) {
        return "(" + phone.slice(0,2) + ") " + phone.slice(2,7) + "-" + phone.slice(7,13)
    }
    return phone
}

export function formatCep(value) {
    let cep = value.toString();
    return cep.slice(0,5) + "-" + cep.slice(5,8);
}