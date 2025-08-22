import './Login.css';
import React from 'react';
import {useLocation} from 'react-router-dom';
import {loginUser} from "../../api.js";

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({email: '', password: ''});
    const location = useLocation();
    function handleFormChange(e) {
        const {name, value} = e.target;
        setLoginFormData(prev => ({...prev, [name]: value}));

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(loginFormData);
        loginUser({email: loginFormData.email, password: loginFormData.password}).then(
            (res) => {
                console.log(res);
            }
        ).catch(error => {
            console.log(error)
        });
    }

    return (<div className="LOGIN__page-contain">
        <form onSubmit={handleSubmit} className="LOGIN__content-contain">
            {location?.state?.message && <h2>{location.state.message}</h2> }
            <h1>Sign in to your account</h1>
            <input type={'email'} name={'email'}
                   onChange={handleFormChange} placeholder={'Email'}
                   className={'LOGIN__login-input LOGIN__input-top'}/>
            <input type={'password'} name={'password'}
                   onChange={handleFormChange} placeholder={'Password'}
                   className={'LOGIN__login-input LOGIN__input-bottom'}/>
            <button className={'LOGIN__button'}>Log in</button>
        </form>
    </div>)
}