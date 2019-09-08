import React from "react";
import styles from "../Login.module.scss";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <h2 className={styles.title}>Cadastrar-se</h2>
            <p className={styles.description}>Cadastre-se para utilizar o sistema</p>
            <form>
                <div className={styles.formField}>
                    <input type="text" className="form-control" placeholder="Nome" />
                </div>
                <div className={styles.formField}>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className={styles.formField}>
                    <input type="password" className="form-control" placeholder="Senha" />
                </div>
                <div className={styles.formField}>
                    <Button text="Cadastrar" grayDark />
                </div>
            </form>
            <Link className={styles.message} to="/terms">
                Ao se inscrever, você concorda com nossos <br />
                Termos e Condições
            </Link>
        </>
    )
}

export default Register;