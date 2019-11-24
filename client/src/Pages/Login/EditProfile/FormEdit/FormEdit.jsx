import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../../../Components/Button/Button";
import * as yup from "yup";
import styles from "../../Login.module.scss";
import Loading from "../../../../Components/Loading/Loading";
import { userService } from "../../../../Services";
import { UserContext } from "../../../../App";


const validation = yup.object().shape({
    name: yup.string().required("Campo obrigatório").min(5, "O nome deve ter no mínimo 5 caracteres"),
    email: yup.string().required("Campo obrigatório").email("Deve ser informado um email válido"),
    password: yup.string().required("Campo obrigatório")
        .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)/,
            { message: "A senha deve ter entre 8 e 12 caracteres (a, A, 0, !)" })
        .min(8, "A senha deve ter entre 8 e 12 caracteres (a, A, 0, !)")
        .max(12, "A senha deve ter entre 8 e 12 caracteres (a, A, 0, !)")
});

const FormEdit = props => {
    const { initialName, initialEmail, initialPassword } = props;
    const [load, setLoad] = useState(false);
    const { user } = useContext(UserContext);
    const _editUser = (data) => {
        setLoad(true);

        userService.updateUser(user.id, data.name, data.email, data.password).then((resp) => {
            if (resp.status === 200) {
                alert(resp.data.message);
                window.location.reload();
            } else {
                alert(resp.data.message);
            }
            setLoad(false);
        }).catch((error) => {
            alert("Algo deu errado");
            setLoad(false);
        })
    }
    const initialValues = {
        name: initialName,
        email: initialEmail,
        password: initialPassword
    };

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={_editUser} validationSchema={validation}>
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
                        {load ? <Loading /> : <Button text="Salvar" grayDark />}
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default FormEdit;