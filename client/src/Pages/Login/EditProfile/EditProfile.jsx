import React, { useState } from "react";
import styles from "../Login.module.scss";
import FormAutentication from "./FormAutentication/FormAutentication";
import FormEdit from "./FormEdit/FormEdit";

const EditProfile = () => {
    const [autentication, setAutentication] = useState(false);
    const [initialName, setName] = useState("");
    const [initialEmail, setEmail] = useState("");
    const [initialPassword, setPassword] = useState("");
    const description = autentication ? "Altere seus dados" : "Confirme sua senha para alterar os dados";

    return (
        <>
            <h2 className={styles.title}>Editar Perfil</h2>
            <p className={styles.description}>{description}</p>
            {autentication ? <FormEdit initialName={initialName}
                initialEmail={initialEmail} initialPassword={initialPassword} /> :
                <FormAutentication setAutentication={setAutentication} setName={setName}
                    setEmail={setEmail} setPassword={setPassword} />}
        </>
    )
}

export default EditProfile;