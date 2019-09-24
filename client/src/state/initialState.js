export const initialState = () =>({
    user: {
        name: "",
        isLogged: sessionStorage.getItem("token") ? true : false
    }
})