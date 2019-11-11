export const initialState = () =>({
    user: {
        id: localStorage.getItem("id") ? localStorage.getItem("id") : "",
        name: "",
        isLogged: true
    }
})