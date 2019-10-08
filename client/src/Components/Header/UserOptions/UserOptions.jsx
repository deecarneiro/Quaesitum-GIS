import React from "react";
import { Link } from "react-router-dom";
import styles from "../Header.module.scss";
import Button from "../../Button/Button";
import iconPerfil from "../../../assets/images/perfil-icon.png";

const UserOptions = props => {
    const {user, logout} = props;
    return (
        user.isLogged ?
            (<div className="dropdown">
                <div className={`${styles.profileOptions} ${styles.option}`}
                    id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <p>{user.name}</p>
                    <img className={styles.icon} src={iconPerfil} alt="_"/>
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link className={`dropdown-item ${styles.option}`} to="/editProfile">Editar perfil</Link>
                    <div className="dropdown-divider" />
                    <span className={`dropdown-item ${styles.option}`} onClick={logout}>Sair</span>
                </div>
            </div>)
            :
            (<Link to="/login">
                <Button text="Entrar" blue />
            </Link>)
    )
}

export default UserOptions;