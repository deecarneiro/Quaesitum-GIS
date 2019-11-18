const axios = require('axios');

const API = "http://localhost:5000/map";

const map = {
    saveMap: (id, name, layers, description, baseMap) => {
        const url = API;
        const data = {
            userId: id,
            name: name,
            description: description,
            baseMap: baseMap,
            layers: [{
                name: "camada 1",
                latLng: layers
            }]
        }
        console.log(data);
        return axios.post(url, data);
    },
    updateMap: () => {
        const url = API;
        const data = {
            userId: id,
            name: name,
            description: description,
            baseMap: baseMap,
            layers: [{
                name: "camada 1",
                latLng: layers
            }]
        }
        console.log(data);
        return axios.put(url, data);
    }
}
export default map;