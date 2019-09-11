const axios = require('axios');

const API = "http://localhost:5000/"; 

const user = {
    saveUser: (name, email, password) => {
        const url = API;
        let data = {
            name: name,
            email: email,
            password: password
        }
        data = JSON.stringify(data);
        return axios.post(url, data);
    },
    loadUser: (id) => {
        const url = API + id;
        return axios.get(url);
    }
}
export default user;