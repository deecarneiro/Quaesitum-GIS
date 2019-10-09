import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import styles from "./Header.module.scss";
import iconMap from "../../assets/images/map-icon.png";
import { userContext } from "../../App";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import UserOptions from "./UserOptions/UserOptions";


const Header = props => {
    const { user, setUserLogged } = useContext(userContext);
    const { history } = props;

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        setUserLogged(false);
        history.push("/login");
    }

    return (
        <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light`}>
            <div className={styles.bodyHeader}>
                <div className={styles.leftHeader}>
                    <a className="navbar-brand" href="/#">
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
    )
}

export default withRouter(Header);