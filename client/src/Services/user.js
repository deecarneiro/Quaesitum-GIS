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
    loadUser: (id) => {
        const url = API + id;
        return axios.get(url);
    }
}
export default user;