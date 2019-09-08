import React from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light`}>
            <div className={styles.bodyHeader}>
                <div className={styles.leftHeader}>
                    <a className="navbar-brand" href="/#"> <img src="C:\Users\Deyse\Desktop\Quaesitum-GIS\client\src\assets\map-icon.png" alt="Quaesitum-GIS" />Quaesitum GIS</a>
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item active ${styles.option}`}>
                            <a className="nav-link" href="/#">Cadastro</a>
                        </li>
                        <li className={`nav-item active ${styles.option}`}>
                            <a className="nav-link" href="/#">Sobre</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.rightHeader}>
                    <div className={styles.btnArea}>
                        <Link to="/login">
                            <Button text="Entrar" grayDark />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;