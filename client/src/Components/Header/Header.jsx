import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styles from "./Header.module.scss";
import iconMap from "../../assets/images/map-icon.png";
import { UserContext } from "../../App";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import UserOptions from "./UserOptions/UserOptions";
import Loading from "../Loading/Loading";
import { userService } from "../../Services";


const Header = props => {
    const { user, setUserLogged, setUserName } = useContext(UserContext);
    const { history } = props;
    const [load, setLoad] = useState(false);
    const logout = async () => {
        await setLoad(true);
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        sessionStorage.removeItem("map");
        await setUserLogged(false);
        await setLoad(false);
        history.push("/login");
    }

    useEffect(() => {
        let id = localStorage.getItem("id");
        userService.getUser(id).then((resp) => {
            setUserName(resp.data.name);
        }).catch((error) => {
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            } else {
                alert("Algo deu errado");
            }
        })
    }, [])

    return (
        <>
            <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light`}>
                <div className={styles.bodyHeader}>
                    <div className={styles.leftHeader}>
                        <a className="navbar-brand" href="/home">
                            <img src={iconMap} alt="_" />
                            Quaesitum GIS
                    </a>
                        <HeaderOptions user={user} />
                    </div>
                    <div className={styles.rightHeader}>
                        <div className={styles.btnArea}>
                            <UserOptions user={user} logout={logout} />
                        </div>
                    </div>
                </div>
            </nav>
            {load &&
                <Loading message="Saindo" />
            }
        </>
    )
}

export default withRouter(Header);