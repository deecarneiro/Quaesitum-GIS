import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../../../Components/Button/Button";
import * as yup from "yup";
import styles from "../../Login.module.scss";
import Loading from "../../../../Components/Loading/Loading";

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

    const { setAutentication } = props;
    const [load, setLoad] = useState(false);
    const checkPassword = () => {
        setLoad(true);
        setTimeout(() => {
            setAutentication(true);
            setLoad(false);
        }, 3000);
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
                        <Button text="Verificar" grayDark />
                    </div>
                </Form>
            </Formik>
            {load && <Loading message="Carregando" />}
        </>
    )
}

export default FormAutentication;