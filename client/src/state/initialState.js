export const initialState = () =>({
    user: {
        name: sessionStorage.getItem("name") ? sessionStorage.getItem("name") : "",
        isLogged: sessionStorage.getItem("token") ? true : false
    }
})