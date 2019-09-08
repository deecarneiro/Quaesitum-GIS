import React from "react";
import styles from "../Login.module.scss";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";
const Enter = () => {

    return (
        <>
            <h2 className={styles.title}>Entrar</h2>
            <p className={styles.description}>Faça login no sistema para utilizar suas funções e seus projetos</p>
            <form>
                <div className={styles.formField}>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className={styles.formField}>
                    <input type="password" className="form-control" placeholder="Senha" />
                </div>
                <div className={styles.formField}>
                    <Button text="Entrar" grayDark />
                </div>
            </form>
            <Link className={styles.message} to="/recoverPassword">
                Esqueceu a senha?
            </Link>
        </>
    )
}

export default Enter;