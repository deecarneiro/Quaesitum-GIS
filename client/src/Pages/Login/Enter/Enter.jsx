import React, { useContext } from "react";
import styles from "../Login.module.scss";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";
import { userService } from "../../../Services";
import { userContext } from "../../../App";
import { withRouter } from "react-router-dom";

const Enter = (props) => {
    const { setUserLogged } = useContext(userContext);

    const loadUser = async (event) => {
        event.preventDefault();
        const email = document.querySelector("input[name=email]").value;
        const password = document.querySelector("input[name=password]").value;
        console.log(email);
        console.log(password);
        try {
            const response = await userService.loadUser(email, password);
            console.log(response);
            if (response.status === 201) {
                sessionStorage.setItem("token", response.data.token);
                sessionStorage.setItem("name", response.data.data.name);
                await setUserLogged(true);
                props.history.push("/home");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h2 className={styles.title}>Entrar</h2>
            <p className={styles.description}>Faça login no sistema para utilizar suas funções e seus projetos</p>
            <form method="post" onSubmit={loadUser}>
                <div className={styles.formField}>
                    <input name="email" type="email" className="form-control" placeholder="Email" />
                </div>
                <div className={styles.formField}>
                    <input name="password" type="password" className="form-control" placeholder="Senha" />
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

export default withRouter(Enter);