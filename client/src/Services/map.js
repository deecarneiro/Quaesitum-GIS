const axios = require('axios');

const API = "http://localhost:5000/map";

const map = {
    saveMap: (id, name, layers) => {
        const url = API;
        const data = {
            userId: id,
            map: {
                name: name,
                layers: [layers]
            }
        }
        console.log(data);
        return axios.post(url, data);
    }
}
export default map;