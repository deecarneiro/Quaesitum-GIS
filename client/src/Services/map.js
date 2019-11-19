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
        console.log(data);
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
        console.log(data);
        return axios.put(url, data);
    }
}
export default map;