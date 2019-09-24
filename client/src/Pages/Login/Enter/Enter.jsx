import React, { useContext } from "react";
import styles from "../Login.module.scss";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";
import { userService } from "../../../Services";
import { userContext } from "../../../App";
import { withRouter } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const Enter = (props) => {
    const { setUserLogged, setUserName } = useContext(userContext);

    const loadUser = async (user) => {
        try {
            const response = await userService.loadUser(user.email, user.password);
            if (response.status === 201) {
                console.log(response.data);
                sessionStorage.setItem("token", response.data.token);
                sessionStorage.setItem("name", response.data.data.name);
                await setUserName(response.data.data.name);
                await setUserLogged(true);
                props.history.push("/home");
            }
        } catch (error) {
            console.log(error.response);
        }
    }

    const initialValues = {
        email: "",
        password: ""
    }

    const validation = yup.object().shape({
        email: yup.string().required("Campo obrigatório").email("Deve ser informado um email válido"),
        password: yup.string().required("Campo obrigatório")
            .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)/,
                { message: "A senha deve ter entre 8 e 12 caracteres (a, A, 0, !)" })
            .min(8, "A senha deve ter entre 8 e 12 caracteres (a, A, 0, !)")
            .max(12, "A senha deve ter entre 8 e 12 caracteres (a, A, 0, !)")
    })

    return (
        <>
            <h2 className={styles.title}>Entrar</h2>
            <p className={styles.description}>Faça login no sistema para utilizar suas funções e seus projetos</p>
            <Formik initialValues={initialValues} onSubmit={loadUser} validationSchema={validation}>
                <Form>
                    <div className={styles.formField}>
                        <Field name="email" type="email" className="form-control" placeholder="Email" />
                        <ErrorMessage className={styles.errorMessage} component="span" name="email" />
                    </div>
                    <div className={styles.formField}>
                        <Field name="password" type="password" className="form-control" placeholder="Senha" />
                        <ErrorMessage className={styles.errorMessage} component="span" name="password" />
                    </div>
                    <div className={styles.formField}>
                        <Button text="Entrar" grayDark />
                    </div>
                </Form>
            </Formik>
            <Link className={styles.message} to="/recoverPassword">
                Esqueceu a senha?
            </Link>
        </>
    )
}

export default withRouter(Enter);