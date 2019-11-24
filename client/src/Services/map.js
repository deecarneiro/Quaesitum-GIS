const axios = require('axios');

const API = "http://localhost:5000/map";

const map = {
    saveMap: (userId, map) => {
        const url = API;
        const data = {
            userId: userId,
            name: map.name,
            description: map.description,
            baseMap: map.baseMap,
            layers: map.layers
        }
        return axios.post(url, data);
    },
    updateMap: (map) => {
        const url = API + "/"+ map.id;
        const data = {
            name: map.name,
            description: map.description,
            baseMap: map.baseMap,
            layers: map.layers
        }
        return axios.put(url, data);
    },
    getById: (id) => {
        const url = API + "/"+ id;
        return axios.get(url);
    }
}
export default map;