import {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import http from "../plugins/http"

const Login = () => {

    const nav = useNavigate()
    const username = useRef()
    const pass = useRef()


    async function login() {
        const logged = {
            username: username.current.value,
            pass: pass.current.value
        }

       http.post(logged, "login").then(res => {
           if(res.success) {
               nav('/allauctions')
           }
       })
    }


    return (
        <div className="registerField d-flex f-column j-ard al-center">
            <input type="text" ref={username} placeholder="Your username"/>
            <input type="text" ref={pass} placeholder="Your password"/>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;