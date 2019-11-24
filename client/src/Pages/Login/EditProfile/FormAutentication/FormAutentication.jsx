import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../../../Components/Button/Button";
import * as yup from "yup";
import styles from "../../Login.module.scss";
import Loading from "../../../../Components/Loading/Loading";
import { UserContext } from "../../../../App";
import { userService } from "../../../../Services";

const initialValues = {
    password: ""
};

const validation = yup.object().shape({
    password: yup.string().required("Campo obrigatório")
        .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)/,
            { message: "A senha deve ter entre 8 e 12 caracteres (a, A, 0, !)" })
        .min(8, "A senha deve ter entre 8 e 12 caracteres (a, A, 0, !)")
        .max(12, "A senha deve ter entre 8 e 12 caracteres (a, A, 0, !)")
});

const FormAutentication = props => {

    const { setAutentication, setName, setEmail, setPassword } = props;
    const [load, setLoad] = useState(false);
    const { user } = useContext(UserContext);

    const checkPassword = (data) => {
        setLoad(true);
        userService.getUser(user.id)
            .then((resp) => {
                userService.loadUser(resp.data.email, data.password)
                    .then((resp) => {
                        if (resp.status === 201) {
                            setName(resp.data.data.name);
                            setEmail(resp.data.data.email);
                            setPassword(data.password);
                            setAutentication(true);
                        }
                        setLoad(false);
                    }).catch((error) => {
                        if(error.response && error.response.data){
                            alert(error.response.data.message);
                        }else{
                            alert("Algo deu errado");
                        }
                        setLoad(false);
                    })
            }).catch((error) => {
                alert("Algo deu errado");
                setLoad(false);
            })
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={checkPassword} validationSchema={validation}>
                <Form>
                    <div className={styles.formField}>
                        <Field name="password" type="password" className="form-control" placeholder="Senha" />
                        <ErrorMessage className={styles.errorMessage} component="span" name="password" />
                    </div>
                    <div className={styles.formField}>
                        {load ? <Loading /> : <Button text="Verificar" grayDark />}
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default FormAutentication;