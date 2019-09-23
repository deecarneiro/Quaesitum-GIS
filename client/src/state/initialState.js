export const initialState = () =>({
    isLogged: sessionStorage.getItem("token") ? true : false
})