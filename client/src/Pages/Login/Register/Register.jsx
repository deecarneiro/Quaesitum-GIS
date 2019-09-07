import React from "react";
import styles from "../Login.module.scss";
import Button from "../../../Components/Button/Button";

const Register = () => {
    return (
        <>
            <h2 className={styles.title}>Cadastrar-se</h2>
            <p className={styles.description}>Cadastre-se para utilizar o sistema</p>
            <form>
                <div className={styles.formField}>
                    <input type="text" class="form-control" placeholder="Nome" />
                </div>
                <div className={styles.formField}>
                    <input type="email" class="form-control" placeholder="Endereço de Email" />
                </div>
                <div className={styles.formField}>
                    <input type="password" class="form-control" placeholder="Senha"/>
                </div>
                <div className={styles.formField}>
                    <Button text="Cadastrar" grayDark />
                </div>
            </form>
        </>
    )
}

export default Register;