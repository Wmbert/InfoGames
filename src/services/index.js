import axios from "axios";

//my key:  d22198479fd144bcb2462c4d8e011db2

const api = axios.create({
    baseURL: 'https://api.rawg.io/api'
});

export default api
