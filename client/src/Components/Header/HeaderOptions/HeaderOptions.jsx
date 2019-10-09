import React from "react";
import styles from "../Header.module.scss";
import { Link } from "react-router-dom";

const HeaderOptions = props => {
    const { user } = props;
    return (
        user.isLogged ?
            (<ul className="navbar-nav mr-auto">
                <li className={`nav-item actived ${styles.option}`}>
                    <Link className="nav-link" to="/generateMap">Criar mapa</Link>
                </li>
                <li className={`nav-item ${styles.option}`}>
                    <Link className="nav-link" to="/home">Coleção de Mapas</Link>
                </li>
            </ul>)
            :
            (<ul className="navbar-nav mr-auto">
                <li className={`nav-item actived ${styles.option}`}>
                    <Link className="nav-link" to="/">Cadastro</Link>
                </li>
                <li className={`nav-item ${styles.option}`}>
                    <Link className="nav-link" to="/about">Sobre</Link>
                </li>
            </ul>)
    )
}

export default HeaderOptions;