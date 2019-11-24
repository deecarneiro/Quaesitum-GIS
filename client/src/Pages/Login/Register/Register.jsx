import React, { useState } from "react";
import styles from "../Login.module.scss";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { userService } from "../../../Services";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Loading from "../../../Components/Loading/Loading";

const saveUser = async (user, setLoad, history) => {
    setLoad(true);
    try {
        const response = await userService.saveUser(user.name, user.email, user.password);
        console.log(response);
        setLoad(false);
        history.push("/login");
    } catch (error) {
        if( error.response && error.response.data){
            alert(error.response.data.message);
        }else{
            alert("Algo deu errado");
        }
        setLoad(false);
    }
}

const initialValues = {
    name: "",
    email: "",
    password: ""
}

const validation = yup.object().shape({
    name: yup.string().required("Campo obrigatório").min(5, "O nome deve ter no mínimo 5 caracteres"),
    email: yup.string().required("Campo obrigatório").email("Deve ser informado um email válido"),
    password: yup.string().required("Campo obrigatório")
        .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)/,
            { message: "A senha deve ter entre 8 e 12 caracteres (a, A, 0, !)" })
        .min(8, "A senha deve ter entre 8 e 12 caracteres (a, A, 0, !)")
        .max(12, "A senha deve ter entre 8 e 12 caracteres (a, A, 0, !)")
})

const Register = props => {
    const [load, setLoad] = useState(false);

    const _saveUser = (user) => {
        saveUser(user, setLoad, props.history);
    }

    return (
        <>
            <h2 className={styles.title}>Cadastrar-se</h2>
            <p className={styles.description}>Cadastre-se para utilizar o sistema</p>
            <Formik initialValues={initialValues} onSubmit={_saveUser} validationSchema={validation}>
                <Form>
                    <div className={styles.formField}>
                        <Field name="name" type="text" className="form-control" placeholder="Nome" />
                        <ErrorMessage className={styles.errorMessage} component="span" name="name" />
                    </div>
                    <div className={styles.formField}>
                        <Field name="email" type="email" className="form-control" placeholder="Email" />
                        <ErrorMessage className={styles.errorMessage} component="span" name="email" />
                    </div>
                    <div className={styles.formField}>
                        <Field name="password" type="password" className="form-control" placeholder="Senha" />
                        <ErrorMessage className={styles.errorMessage} component="span" name="password" />
                    </div>
                    <div className={styles.formField}>
                        {load ? <Loading message="Cadastrando" /> :
                            <Button text="Cadastrar" grayDark />}
                    </div>
                </Form>
            </Formik>
            <Link className={styles.message} to="/terms">
                Ao se inscrever, você concorda com nossos <br />
                Termos e Condições
            </Link>
        </>
    )
}

export default withRouter(Register);