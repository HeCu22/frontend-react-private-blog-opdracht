import React from 'react';
import {useHistory} from "react-router-dom";


function Login(props) {
    const history = useHistory();

    function signIn() {

        history.push('/');
    }
    return (
        <section>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen!</p>
            <button type="button" onClick={signIn}>
                Inloggen
            </button>
        </section>
    );
}

export default Login;