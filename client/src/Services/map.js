const axios = require('axios');

const API = "http://localhost:5000/map"; 

const map = {
    saveMap: (name, layers) => {
        const url = API;
        const data = {
            name: name,
            layers: layers
        }
        return axios.post(url, data);
    }
}
export default map;