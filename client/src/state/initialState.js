export const initialState = () =>({
    user: {
        name: localStorage.getItem("name") ? localStorage.getItem("name") : "",
        isLogged: localStorage.getItem("token") ? true : false
    }
})