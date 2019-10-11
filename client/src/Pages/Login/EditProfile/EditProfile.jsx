import React, { useState } from "react";
import styles from "../Login.module.scss";
import FormAutentication from "./FormAutentication/FormAutentication";
import FormEdit from "./FormEdit/FormEdit";

const EditProfile = () => {
    const [autentication, setAutentication] = useState(false);
    const description = autentication ? "Altere seus dados" : "Confirme sua senha para alterar os dados";
    return (
        <>
            <h2 className={styles.title}>Editar Perfil</h2>
            <p className={styles.description}>{description}</p>
            {autentication ? <FormEdit /> :
                <FormAutentication setAutentication={setAutentication} />}
        </>
    )
}

export default EditProfile;