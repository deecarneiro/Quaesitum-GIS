import React from "react";
import styles from "../Login.module.scss";
import Button from "../../../Components/Button/Button";

const Enter = () => {

    return (
        <>
            <h2 className={styles.title}>Entrar</h2>
            <p className={styles.description}>Faça login no sistema para utilizar suas funções e seus projetos</p>
            <form>
                <div className={styles.formField}>
                    <input type="email" class="form-control" placeholder="Endereço de Email" />
                </div>
                <div className={styles.formField}>
                    <input type="password" class="form-control" placeholder="Senha"/>
                </div>
                <div className={styles.formField}>
                    <Button text="Entrar" grayDark />
                </div>
            </form>
        </>
    )
}

export default Enter;