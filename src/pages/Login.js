import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import users from "../data/users.json";


function Login({auth, toggleAuth}) {
    const [fout, setFout] = useState("empty")

    const [formState, setFormState] = useState({
        usercode: "",
        password: "",
        name: ""
    })

    const history = useHistory();


    function handleChange(evt) {
        evt.preventDefault()
        const value = evt.target.value;
        setFormState({...formState, [evt.target.name]: value});

    }

    function handleSubmit(e) {
        e.preventDefault();
        const currentUser = users.find((useritem) => {
            return useritem.usercode === formState.usercode && useritem.password === formState.password
        })

        if (currentUser !== undefined) {

            toggleAuth(true);
            history.push('/');
        } else {
            setFout("falsy")
        }

    }


    return (
        <section>
            <h1>Login pagina</h1>
            <form onSubmit={handleSubmit}>
                {!auth && <p className={fout}> vul een correct userid en password in </p>}
                <label htmlFor="usercode">
                    <input
                        type="tekst"
                        id="usercode"
                        name="usercode"
                        value={formState.usercode}
                        onChange={handleChange}/>
                    {formState.usercode.length < 6 &&
                        <p className="error-message">Usercode moet minimaal zes karakters lang zijn.</p>}
                </label>
                <label htmlFor="password">
                    <input
                        type="tekst"
                        id="password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}/>

                    {formState.usercode.length < 6 &&
                        <p className="error-message">Password moet minimaal zes karakters lang zijn.</p>}
                </label>

                <button type="submit"
                        disabled={(formState.usercode.length > 5 && formState.password.length > 5) === false ? true : false}>
                    Inloggen
                </button>
            </form>


        </section>
    );
}

export default Login;