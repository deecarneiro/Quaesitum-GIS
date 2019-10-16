export const initialState = () =>({
    user: {
        id: localStorage.getItem("id") ? localStorage.getItem("id") : "",
        name: localStorage.getItem("name") ? localStorage.getItem("name") : "",
        isLogged: localStorage.getItem("token") ? true : false
    }
})