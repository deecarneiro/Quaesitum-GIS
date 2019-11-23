export const initialState = () =>({
    user: {
        id: localStorage.getItem("id") ? localStorage.getItem("id") : "",
        name: "",
        isLogged: localStorage.getItem("token") ? true : false
    },
    map: {
        _id: JSON.parse(sessionStorage.getItem("map")) 
            ? JSON.parse(sessionStorage.getItem("map"))._id : "",
        userId: JSON.parse(sessionStorage.getItem("map"))
            ? JSON.parse(sessionStorage.getItem("map")).userId : "",
        name: JSON.parse(sessionStorage.getItem("map")) 
            ? JSON.parse(sessionStorage.getItem("map")).name : "",
        description: JSON.parse(sessionStorage.getItem("map")) 
            ? JSON.parse(sessionStorage.getItem("map")).description : "",
        basemap: JSON.parse(sessionStorage.getItem("map")) 
            ? JSON.parse(sessionStorage.getItem("map")).basemap : "",
        updated: JSON.parse(sessionStorage.getItem("map")) 
            ? JSON.parse(sessionStorage.getItem("map")).updated : "",
        __v: JSON.parse(sessionStorage.getItem("map")) 
            ? JSON.parse(sessionStorage.getItem("map")).__v : "",
        created: JSON.parse(sessionStorage.getItem("map")) 
            ? JSON.parse(sessionStorage.getItem("map")).created : "",
        layers: JSON.parse(sessionStorage.getItem("map")) 
            ? JSON.parse(sessionStorage.getItem("map")).layers : [],
    }
})