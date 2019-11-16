const axios = require('axios');

const API = "http://localhost:5000/user";

const user = {
    saveUser: (name, email, password) => {
        const url = API;
        const data = {
            name: name,
            email: email,
            password: password
        }
        return axios.post(url, data);
    },
    loadUser: (email, password) => {
        const url = API + "/authenticate";
        const data = {
            email: email,
            password: password
        }
        return axios.post(url, data);
    },
    getUser: (id) => {
        const url = API + "/" + id;
        return axios.get(url);
    },
    updateUser: (id, name, email, password) => {
        const url = API + "/" + id;
        const data = {
            name: name,
            email: email,
            password: password
        }
        return axios.put(url, data);
    },
    getMaps: (id) => {
        const url = API + "/maps";
        const data = {
            id: id
        }
        return axios.get(url, data);
    }
}
export default user;