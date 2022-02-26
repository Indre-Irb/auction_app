import {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import http from "../plugins/http"

const Register = () => {

    const nav = useNavigate()

    const ref = {
        username: useRef(),
        pass1: useRef(),
        pass2: useRef()
    }

    async function register() {
        const user = {
            username: ref.username.current.value,
            pass1: ref.pass1.current.value,
            pass2: ref.pass2.current.value
        }

        http.post(user, "register").then(res => {
            if(res.success) {
                nav('/login')
            }
        })
    }

    return (
        <div className="registerField d-flex f-column j-ard al-center">
            <input type="text" ref={ref.username} placeholder="Your username"/>
            <input type="text" ref={ref.pass1} placeholder="Your password"/>
            <input type="text"  ref={ref.pass2} placeholder="Repeat your password"/>
            <button onClick={register}>Register</button>
        </div>
    );
};

export default Register;