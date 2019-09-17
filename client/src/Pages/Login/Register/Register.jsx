import React from "react";
import styles from "../Login.module.scss";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";
import { userService } from "../../../Services";

const saveUser = async (event) => {
    event.preventDefault();
    const name = document.querySelector("input[name=name]").value;
    const email = document.querySelector("input[name=email]").value;
    const password = document.querySelector("input[name=password]").value;
    console.log(name);
    console.log(email);
    console.log(password);
    try{
        const response = await userService.saveUser(name, email, password);
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

const Register = () => {
    return (
        <>
            <h2 className={styles.title}>Cadastrar-se</h2>
            <p className={styles.description}>Cadastre-se para utilizar o sistema</p>
            <form method="post" onSubmit={saveUser}>
                <div className={styles.formField}>
                    <input name="name" type="text" className="form-control" placeholder="Nome" />
                </div>
                <div className={styles.formField}>
                    <input name="email" type="email" className="form-control" placeholder="Email" />
                </div>
                <div className={styles.formField}>
                    <input name="password" type="password" className="form-control" placeholder="Senha" />
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